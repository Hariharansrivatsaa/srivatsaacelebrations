import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bag from "../Assets/Gif/bag.gif";
import cartimage from "../Assets/Products/2sound.webp";

const Cart = () => {
  return (
    <>
      <Header />
      <section className="container my-4">
        <div className="cartaligntext">
          <img src={bag} className="bagicon" alt="bag" />
          <h4 className="carttitle my-auto"> My Cart</h4>
        </div>
      </section>
      <section className=" container my-4">
        <div className="row">
          <div className="col-lg-9">
            <div className="cartline"></div>
            <div className="row my-4">
              <div className="col-lg-2">
                <img src={cartimage} alt="cartimage" className="cartimage" />
              </div>
              <div className="col-lg-4">
                <h6 className="cartimagetitle">Kuruvi Crackers</h6>
                <h6 className="cartimagesubtitle">Brand : Srinivasa</h6>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3"></div>
            </div>
          </div>
          <div className="col-lg-3">ewfw</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
