import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";

const Quickorder = () => {
  const [products, setProducts] = useState([]);

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
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      Swal.fire("Error", "Failed to load products", "error");
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="container">
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
              <tr>
                <td colSpan="8" className="tableheading">
                  Single Sound Crackers
                </td>
              </tr>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.product_name}</td>
                  <td>
                    <img
                      src={`https://ndabevturhrddprzhkcb.supabase.co/storage/v1/object/public/Images/${product.image_url}`}
                      alt={product.product_name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{product.product_details}</td>
                  <td>
                    <del>{product.mrp}</del>
                  </td>
                  <td>{product.our_price}</td>
                  <td>
                    <input type="number" />
                  </td>
                  <td>0</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Quickorder;
