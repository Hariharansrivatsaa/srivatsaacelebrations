import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import kuruvi from "../Assets/Products/kuruvi.webp";
import threelakshimi from "../Assets/Products/3lakshimi.webp";
import fourlakshimi from "../Assets/Products/4lakshimi.webp";
import deluxelakshimi from "../Assets/Products/deluxelakshimi.webp";
import fivelakshimi from "../Assets/Products/5lakshimi.webp";
import twosound from "../Assets/Products/2sound.webp";
import chakkarten from "../Assets/Products/bigchakkar10.webp";
import chakkartwofive from "../Assets/Products/bigchakkar25.webp";
import chakkarspl from "../Assets/Products/chakkarspl.webp";
import chakkardlx from "../Assets/Products/chakkardlx.webp";

const Product = () => {
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
              <button className="producttopic">2024 New Varieties</button>
              <button className="producttopic">New Arrivals</button>
              <button className="producttopic">Single Sound Crackers</button>
            </div>
            <div className="col-lg-9">
              <h5 className="producttitleheading">All Products</h5>
              <div>
                <h5 className="mt-3 producttitle">Single Sound Crackers</h5>
                <div className="row my-3">
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={kuruvi}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={threelakshimi}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={fourlakshimi}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={deluxelakshimi}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={fivelakshimi}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={twosound}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={twosound}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="mt-3 producttitle">Ground Chakkars</h5>
                <div className="row my-3">
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={chakkarten}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={chakkartwofive}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={chakkarspl}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={chakkardlx}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="productcontain">
                      <img
                        src={chakkardlx}
                        alt="products"
                        className="productimage"
                      />
                      <div class="cartmiddle">
                        <div class="productcarttext">Add to cart</div>
                      </div>
                    </div>
                  </div>
                </div>
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
