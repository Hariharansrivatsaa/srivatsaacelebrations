import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useAuthStore } from "../Store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";

const Checkout = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [quantities, setQuantities] = useState({});
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalMarketPrice, setTotalMarketPrice] = useState(0);
  const [currentOrderValue, setCurrentOrderValue] = useState(0);

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
      navigate("/Login");
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
      navigate("/Thankyou");
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
      <section className="container">
        <div className="my-5">
          <h4> Notes</h4>
          <p className="checkoutrules">
            <span className="checkoutrulecolor">⦿</span> For concerns such as
            missing issues or damaged deliveries, please take a parcel opening
            video and submit it to us at{" "}
            <a href="mailto:contact@srivatsaacelebraions.com">
              contact@srivatsaacelebraions.com
            </a>{" "}
            or Whatsapp on +91 95145 61008, For Help +91 93616 42123.
          </p>
          <p className="checkoutrules">
            <span className="checkoutrulecolor">⦿</span> The Supreme Court of
            India has banned the sale of firecrackers beginning in 2018. We
            comply with the ruling and do not allow online cracker purchases.
          </p>
          <p className="checkoutrules">
            <span className="checkoutrulecolor">⦿</span> Place your order 10
            days before Diwali 2024 to prevent last-minute expensive transport
            costs and delays.
          </p>
          <p className="checkoutrules">
            <span className="checkoutrulecolor">⦿</span> 80% + Special Bonus
            Crackers - Special Bonus Carckers is eligible for the confirmation
            order.
          </p>
        </div>
      </section>
      <section className="container">
        {isLoggedIn ? (
          <>
            <div className="row aligntext">
              <div className="col-lg-4 mx-auto ms-auto">
                <h4 className="my-4"> Order Details</h4>
                <div>
                  <h6 className="checkoutpage">
                    Total No of Items :{" "}
                    <span className="checkoutpagecolour">{totalProducts}</span>
                  </h6>
                  <h6 className="checkoutpage">
                    Total Order value :{" "}
                    <span className="checkoutpagecolour">
                      ₹
                      {Math.round(
                        currentOrderValue * 0.025 + currentOrderValue
                      )}
                    </span>
                  </h6>
                </div>
                <div className="my-5">
                  <button className="checkbtn" onClick={handleCheckout}>
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row">
            <div className="col-lg-6 mx-auto ms-auto">
              <div className="aligntext">
                <Link to="/Login">
                  <button className="routelogin">Login</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
