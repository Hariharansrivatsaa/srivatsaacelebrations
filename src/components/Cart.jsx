import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import bag from "../Assets/Gif/bag.gif";
import lock from "../Assets/Icon/lock.webp";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";

const Cart = () => {
  const [quantities, setQuantities] = useState({});
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalMarketPrice, setTotalMarketPrice] = useState(0);
  const [currentOrderValue, setCurrentOrderValue] = useState(0);
  const [minimumOrderValue, setMinimumOrderValue] = useState(2499);
  const allowedCodes = ["sana couples", "pondy couples", "sago couples"];
  const navigate = useNavigate();

  const botToken = "7077221858:AAHk9lh5chm4IJ445d9L71qsywzqE6nEzBg";
  const chatId = "-1002187790078";

  useEffect(() => {
    const storedQuantities = localStorage.getItem("quantities");
    if (storedQuantities) {
      const parsedQuantities = JSON.parse(storedQuantities);
      setQuantities(parsedQuantities);
      calculateTotals(parsedQuantities);
    }
  }, []);

  const calculateTotals = (quantities) => {
    const marketPriceTotal = Object.values(quantities).reduce((total, item) => {
      return total + item.mrp * item.quantity;
    }, 0);

    setTotalMarketPrice(marketPriceTotal);
    setTotalProducts(Object.keys(quantities).length);
    setCurrentOrderValue(
      Object.values(quantities).reduce(
        (total, item) => total + item.our_price * item.quantity,
        0
      )
    );
  };

  const handleQuantityChange = (product_code, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max(
        0,
        (prevQuantities[product_code].quantity || 0) + change
      );
      const updatedQuantities = { ...prevQuantities };

      if (newQuantity === 0) {
        // Remove the product if the quantity is zero
        delete updatedQuantities[product_code];
      } else {
        updatedQuantities[product_code] = {
          ...prevQuantities[product_code],
          quantity: newQuantity,
        };
      }

      // Update local storage
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
      calculateTotals(updatedQuantities); // Recalculate totals
      return updatedQuantities;
    });
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setMinimumOrderValue(selectedValue === "insideTN" ? 2499 : 3499);
  };

  const amountRemaining = Math.max(minimumOrderValue - currentOrderValue, 0);
  const isCheckoutEnabled = currentOrderValue >= minimumOrderValue;

  const handleSubmit = () => {
    const input = document.querySelector(".inputcode");
    const code = input.value.trim().toLowerCase();

    if (allowedCodes.includes(code)) {
      Swal.fire({
        title: "Success!",
        text: "Promo code applied successfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid promo code. Please try again.",
        icon: "error",
      });
    }
  };

  const sendTelegramMessage = async (newCheckoutEntry, userData) => {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const orderDetails = Object.entries(newCheckoutEntry)[0];
    const [orderDate, items] = orderDetails;

    const productDetails = items
      .filter((item) => item.product_code)
      .map(
        (item) => `
  Product Name: ${item.product_name}
  Product Code: ${item.product_code}
  Quantity: ${item.quantity}
  Total: ₹${item.Total.toFixed(2)}`
      )
      .join("\n");

    const summaryDetails = items
      .filter((item) => typeof item === "object" && !Array.isArray(item))
      .map((item) => {
        const [key, value] = Object.entries(item)[0];
        return `${key}: ${value}`;
      })
      .join("\n");

    const message = `
  New Order (${orderDate}):
  
  Customer Details:
  Username: ${userData.username}
  Phone: ${userData.phone}
  Location: ${userData.location}
  
  Order Details:
  ${productDetails}
  
  Order Summary:
  ${summaryDetails}
  `;

    const params = new URLSearchParams({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    });

    try {
      const response = await fetch(`${url}?${params}`);
      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }
      console.log("Message sent to Telegram successfully");
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      // Handle error (you might want to show an alert to the user)
    }
  };

  const handleCheckout = async () => {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      Swal.fire({
        title: "Error!",
        text: "You must be logged in to checkout.",
        icon: "error",
      });
      navigate("/login");
      return;
    }

    try {
      // Fetch current user data
      const { data: user, error: fetchError } = await supabase
        .from("users")
        .select("checkout, username, phone, location")
        .eq("id", userId)
        .single();

      if (fetchError) throw fetchError;

      // Prepare new checkout entry
      const newCheckoutEntry = {
        [new Date().toLocaleString("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })]: Object.entries(quantities)
          .map(([product_code, item]) => ({
            product_name: item.product_name,
            product_code,
            quantity: item.quantity,
            Total: item.our_price * item.quantity,
          }))
          .concat([
            { "Total Items": totalProducts },
            { "Total Amount": currentOrderValue },
            { "Estimated Total": Math.round(currentOrderValue * 1.025) },
          ]),
      };

      // Update checkout array
      const updatedCheckout = [...(user.checkout || []), newCheckoutEntry];

      // Update user's checkout field
      const { error: updateError } = await supabase
        .from("users")
        .update({ checkout: updatedCheckout })
        .eq("id", userId);

      if (updateError) throw updateError;

      // Send Telegram message
      await sendTelegramMessage(newCheckoutEntry, {
        username: user.username,
        phone: user.phone,
        location: user.location,
      });

      Swal.fire({
        title: "Success!",
        text: "Your order has been placed successfully!",
        icon: "success",
      });

      // Clear cart
      localStorage.removeItem("quantities");
      setQuantities({});
      calculateTotals({});

      // Navigate to order confirmation page
      navigate("/Checkout");
    } catch (error) {
      console.error("Error during checkout:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error processing your order. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Header />
      <section className="container my-4">
        <div className="cartaligntext">
          <img src={bag} className="bagicon" alt="bag" />
          <h4 className="carttitle my-auto"> My Cart</h4>
        </div>
      </section>
      <section className="container my-4">
        <div className="alignmentdisplay">
          <h6 className="mt-2"> Delivery To :</h6>
          <select className="selectinput" onChange={handleSelectChange}>
            <option>Select</option>
            <option value="insideTN">Inside Tamil Nadu</option>
            <option value="outsideTN">Outside Tamil Nadu</option>
          </select>
        </div>
      </section>
      <section className="container my-4">
        <div className="row">
          <div className="col-lg-9">
            <div className="cartline"></div>
            {Object.values(quantities).map((item) => (
              <div className="row my-4" key={item.product_code}>
                <div className="col-lg-2 col-md-2 col-sm-2 col-4">
                  <img
                    src={`https://ndabevturhrddprzhkcb.supabase.co/storage/v1/object/public/Images/${item.image_url}`}
                    alt={item.product_name}
                    className="cartimage"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-8">
                  <div className="cartalignment">
                    <h6 className="cartimagetitle">{item.product_name}</h6>
                    <h6 className="cartimagesubtitle">
                      Category : {item.category}
                    </h6>
                    <h6 className="cartimagesubtitle">
                      Content : {item.product_details}
                    </h6>
                    <h6 className="cartimagesubtitle">In Stock</h6>
                    <h6 className="cartimagesubtitle">
                      Market Price : ₹{item.mrp}
                    </h6>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-4">
                  <h6 className="cartimagesidetitle">Price</h6>
                  <h6 className="cartimagetitle1">₹{item.our_price}</h6>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-4">
                  <h6 className="cartimagesidetitle">Quantity</h6>
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.product_code, -1)
                      }
                    >
                      -
                    </button>
                    <h6 className="cartimagetitle1 mx-2">{item.quantity}</h6>
                    <button
                      onClick={() => handleQuantityChange(item.product_code, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-4">
                  <h6 className="cartimagesidetitle">Total</h6>
                  <h6 className="cartimagetitle1">
                    ₹{(item.our_price * item.quantity).toFixed(2)}
                  </h6>
                </div>
                <div className="cartlinebtm"></div>
              </div>
            ))}

            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 col-1"></div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <div className="cartalignment">
                  <h6 className="cartimagetitle">{totalProducts} Items</h6>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                <h6 className="cartimagetitle1">₹{currentOrderValue}</h6>
              </div>
            </div>
            <div>
              <h6 className="cartsavetext my-2">
                You Will Save ₹{totalMarketPrice - currentOrderValue} on this
                order
              </h6>
            </div>
          </div>
          <div className="col-lg-3">
            <h6 className="cartrightsidetitle"> ENTER PROMO CODE</h6>
            <div className="input-group mb-3">
              <input
                type="text"
                className="inputcode"
                placeholder="Promo Code"
                aria-label="Promo Code"
                aria-describedby="button-addon2"
              />
              <button
                className="inputcodebtn"
                type="button"
                id="button-addon2"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className="cartrightsidedisplay">
              <h6 className="cartimagesidesubtitle">Shipping Cost</h6>
              <h6 className="cartimagesidesubtitle">Basic Transport Cost</h6>
            </div>
            {/* <div className="cartrightsidedisplay my-1">
              <h6 className="cartimagesidesubtitle">Discount</h6>
              <h6 className="cartimagesidesubtitle">₹0.00</h6>
            </div> */}
            <div className="cartrightsidedisplay my-1">
              <h6 className="cartimagesidesubtitle">Packing Tax (2.5%)</h6>
              <h6 className="cartimagesidesubtitle">
                ₹{(currentOrderValue * 0.025).toFixed(2)}
              </h6>
            </div>
            <div className="cartrightsidedisplay my-1">
              <h6 className="cartimagesidesubtitle">Round Off</h6>
              <h6 className="cartimagesidesubtitle">
                ₹
                {(
                  Math.round(currentOrderValue * 0.025 + currentOrderValue) -
                  (currentOrderValue * 0.025 + currentOrderValue)
                ).toFixed(2)}
              </h6>
            </div>

            <div className="cartrightsidedisplay my-2">
              <h6 className="cartimagesidetotal">Estimated Total</h6>
              <h6 className="cartimagesidetotal">
                ₹{Math.round(currentOrderValue * 0.025 + currentOrderValue)}
              </h6>
            </div>
            <div>
              {!isCheckoutEnabled && (
                <h6 className="cartrightshipping my-5">
                  You're{" "}
                  <span className="cartrightshippingcolor">
                    ₹{amountRemaining}
                  </span>{" "}
                  away from the minimum order!
                </h6>
              )}
            </div>
            <div className="my-5">
              <Link to="/Checkout">
                <button
                  className="checkbtn"
                  disabled={!isCheckoutEnabled}
                  onClick={handleCheckout}
                >
                  <img src={lock} alt="lock" className="btnicon" />
                  Checkout
                </button>
              </Link>
              <Link to="/Quickorder">
                <button className="continuebtn my-3">Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
