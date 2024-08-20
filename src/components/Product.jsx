import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      console.log("Fetching categories...");
      const { data, error } = await supabase.from("category").select("*");
      if (error) {
        throw error;
      }
      console.log("Fetched categories:", data);
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      Swal.fire("Error", "Failed to load categories", "error");
    }
  };

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
          <h5> Showing 1-20 of 155 results</h5>
          <div className="row my-5">
            <div className="col-lg-3">
              <h5 className="categorytitle mb-4">Products By Category</h5>
              <button className="producttopic">All</button>
              <button className="producttopic">New Arrivals</button>
              {categories.map((category) => (
                <button key={category.id} className="producttopic">
                  {category.category}
                </button>
              ))}
            </div>
            <div className="col-lg-9">
              <h5 className="producttitleheading">All Products</h5>
              <div className="row my-3">
                {products.map((product) => (
                  <div key={product.id} className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={`https://ndabevturhrddprzhkcb.supabase.co/storage/v1/object/public/Images/${product.image_url}`}
                        alt={product.name}
                        className="productimage"
                      />
                      <div className="cartmiddle">
                        <div className="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
