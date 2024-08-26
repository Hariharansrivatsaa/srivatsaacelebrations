import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import bag from "../Assets/Gif/bag.gif";

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
          <div className="col-lg-8">heowhg</div>
          <div className="col-lg-4">ewfw</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
