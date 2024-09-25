import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const Quickorder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantities, setQuantities] = useState(() => {
    const savedQuantities = localStorage.getItem("quantities");
    return savedQuantities ? JSON.parse(savedQuantities) : {};
  });

  const [totalProducts, setTotalProducts] = useState(() => {
    return parseInt(localStorage.getItem("totalProducts")) || 0;
  });

  const [totalOrderValue, setTotalOrderValue] = useState(() => {
    return parseFloat(localStorage.getItem("totalOrderValue")) || 0;
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      console.log("Fetching products...");
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        throw error;
      }

      const sortedData = data.sort((a, b) => {
        const numA = parseInt(a.product_code.split("_")[1], 10);
        const numB = parseInt(b.product_code.split("_")[1], 10);
        return numA - numB;
      });

      setProducts(sortedData);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      Swal.fire("Error", "Failed to load products", "error");
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  const handleQuantityChange = (product, value) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue) && numericValue >= 0) {
      const newQuantities = {
        ...quantities,
        [product.product_code]: {
          ...product,
          quantity: numericValue,
        },
      };
      setQuantities(newQuantities);
    }
  };

  const handleWheel = (e) => {
    e.target.blur();
  };

  useEffect(() => {
    localStorage.setItem("quantities", JSON.stringify(quantities));
  }, [quantities]);

  const groupedProducts = products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});

  useEffect(() => {
    localStorage.setItem("quantities", JSON.stringify(quantities));

    const calculatedTotalProducts = products.reduce((count, product) => {
      const quantity = quantities[product.product_code]?.quantity || 0;
      return count + (quantity > 0 ? 1 : 0);
    }, 0);

    const calculatedTotalOrderValue = products.reduce((total, product) => {
      const quantity = quantities[product.product_code]?.quantity || 0;
      return total + product.our_price * quantity;
    }, 0);

    setTotalProducts(calculatedTotalProducts);
    setTotalOrderValue(calculatedTotalOrderValue);
    localStorage.setItem("totalProducts", calculatedTotalProducts);
    localStorage.setItem("totalOrderValue", calculatedTotalOrderValue);
  }, [quantities, products]);

  const handleReset = () => {
    localStorage.clear();
    setQuantities({});
    setTotalProducts(0);
    setTotalOrderValue(0);
  };

  const handleCheckout = async () => {
    // Retrieve userId from session storage
    const userId = sessionStorage.getItem("userId");

    if (!userId) {
      Swal.fire("Error", "User not logged in", "error");
      return;
    }

    // Filter products that have been added to the cart (quantity > 0)
    const productsInCart = Object.keys(quantities)
      .filter((productCode) => quantities[productCode].quantity > 0)
      .map((productCode) => ({
        product_code: productCode,
      }));

    if (productsInCart.length === 0) {
      Swal.fire(
        "Cart is empty",
        "Please add products to your cart.",
        "warning"
      );
      return;
    }

    try {
      // Fetch the current user's data from the users table in Supabase
      const { data: user, error: fetchError } = await supabase
        .from("users")
        .select("checkout")
        .eq("id", userId)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      // Update the checkout field by appending new products
      const updatedCheckout = [...(user.checkout || []), ...productsInCart];

      const { error: updateError } = await supabase
        .from("users")
        .update({ checkout: updatedCheckout })
        .eq("id", userId);

      if (updateError) {
        throw updateError;
      }

      // Redirect to the cart page
      Swal.fire("Success", "Your cart has been updated!", "success").then(
        () => {
          window.location.href = "/cart";
        }
      );
    } catch (error) {
      console.error("Error updating checkout:", error.message);
      Swal.fire("Error", "Failed to update checkout.", "error");
    }
  };

  return (
    <>
      <Header />
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 ms-auto mx-auto">
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Products: {totalProducts}</th>
                      <th>Total Order: {totalOrderValue.toFixed(2)}</th>
                      <th>
                        <Link to="/cart">
                          <button
                            className="checkoutbtn"
                            // onClick={handleCheckout}
                          >
                            My Cart
                          </button>
                        </Link>
                      </th>
                      <th>
                        <button className="resetbtn" onClick={handleReset}>
                          Reset
                        </button>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container table-responsive">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Content</th>
                <th>Price ₹</th>
                <th>Our Price ₹</th>
                <th>Quantity</th>
                <th>Total ₹</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(groupedProducts).map((category, catIndex) => (
                <React.Fragment key={catIndex}>
                  <tr>
                    <td colSpan="8" className="tableheading">
                      {category}
                    </td>
                  </tr>
                  {groupedProducts[category].map((product, index) => {
                    const quantity =
                      quantities[product.product_code]?.quantity || "";
                    const total = product.our_price * quantity;
                    return (
                      <tr key={product.id}>
                        <td data-label="S.No">{index + 1}</td>
                        <td data-label="Product Name">
                          {product.product_name}
                        </td>
                        <td data-label="Product Image">
                          <img
                            src={`https://ndabevturhrddprzhkcb.supabase.co/storage/v1/object/public/Images/${product.image_url}`}
                            alt={product.product_name}
                            style={{
                              width: "50px",
                              height: "50px",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              handleImageClick(
                                `https://ndabevturhrddprzhkcb.supabase.co/storage/v1/object/public/Images/${product.image_url}`
                              )
                            }
                          />
                        </td>
                        <td data-label="Content">{product.product_details}</td>
                        <td data-label="Price ₹">
                          <del>{product.mrp}</del>
                        </td>
                        <td data-label="Our Price ₹">{product.our_price}</td>
                        <td data-label="Quantity">
                          <input
                            type="number"
                            value={quantity}
                            min="0"
                            onChange={(e) =>
                              handleQuantityChange(product, e.target.value)
                            }
                            onWheel={handleWheel} // Prevent scroll from changing the value
                          />
                        </td>
                        <td data-label="Total ₹">{total.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {selectedImage && (
        <div
          onClick={closePreview}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={selectedImage}
            alt="Preview"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Quickorder;
