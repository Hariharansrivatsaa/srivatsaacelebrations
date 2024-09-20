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

      // Sort products by the numeric part of 'product_code'
      const sortedData = data.sort((a, b) => {
        const numA = parseInt(a.product_code.split("_")[1], 10); // Extract number after '_'
        const numB = parseInt(b.product_code.split("_")[1], 10);
        return numA - numB;
      });

      setProducts(sortedData); // Set sorted products in state
    } catch (error) {
      console.error("Error fetching products:", error.message);
      Swal.fire("Error", "Failed to load products", "error");
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory.category
      )
    : products;

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <h5> Showing 1-20 of 155 results</h5>
          <div className="row my-5">
            <div className="col-lg-3">
              <h5 className="categorytitle mb-4">Products By Category</h5>
              <button
                className="producttopic"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`producttopic ${
                    selectedCategory?.id === category.id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.category}
                </button>
              ))}
            </div>
            <div className="col-lg-9">
              <h5 className="producttitleheading">
                {selectedCategory ? selectedCategory.category : "All Products"}
              </h5>
              <div className="row my-3">
                {filteredProducts.map((product) => (
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
