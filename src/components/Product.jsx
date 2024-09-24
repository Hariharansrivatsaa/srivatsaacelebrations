import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const Product = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9); // Number of products per page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      await fetchCategories();
      await fetchProducts();
      setLoading(false); // End loading
    };

    fetchData();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase.from("category").select("*");
      if (error) throw error;
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      Swal.fire("Error", "Failed to load categories", "error");
    }
  };

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;

      // Sort products by product_code
      const sortedData = data.sort((a, b) => {
        const numA = parseInt(a.product_code.split("_")[1], 10);
        const numB = parseInt(b.product_code.split("_")[1], 10);
        return numA - numB;
      });

      setProducts(sortedData); // Set sorted products in state
    } catch (error) {
      console.error("Error fetching products:", error.message);
      Swal.fire("Error", "Failed to load products", "error");
    }
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory.category
      )
    : products;

  // Pagination logic: Get current products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the selected category
    setCurrentPage(1); // Reset to the first page when category changes
  };

  const totalResults = filteredProducts.length;
  const startResult = (currentPage - 1) * productsPerPage + 1;
  const endResult = Math.min(currentPage * productsPerPage, totalResults);

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <h5>
            Showing {startResult}-{endResult} of {totalResults} results
          </h5>
          {loading ? ( // Conditionally render spinner
            <div className="aligntext my-5">
              <FadeLoader size={50} color={"#d0541e"} loading={loading} />
            </div>
          ) : (
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
                  {selectedCategory
                    ? selectedCategory.category
                    : "All Products"}
                </h5>
                <div className="row my-3">
                  {currentProducts.map((product) => (
                    <div key={product.id} className="col-lg-4 mb-4">
                      <div className="productcontain">
                        <img
                          src={`https://ndabevturhrddprzhkcb.supabase.co/storage/v1/object/public/Images/${product.image_url}`}
                          alt={product.name}
                          className="productimage"
                        />
                        <div className="cartmiddle">
                          <Link to="/Quickorder">
                            <div className="productcarttext">Purchase</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                  {[
                    ...Array(
                      Math.ceil(filteredProducts.length / productsPerPage)
                    ).keys(),
                  ].map((number) => (
                    <button
                      key={number + 1}
                      onClick={() => paginate(number + 1)}
                      className="page-link"
                    >
                      {number + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
