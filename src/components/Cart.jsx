import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import bag from "../Assets/Gif/bag.gif";
import cartimageone from "../Assets/Products/kuruvi.webp";
import cartimagetwo from "../Assets/Products/bigchakkar25.webp";
import lock from "../Assets/Icon/lock.webp";
import { Link } from "react-router-dom";

const Cart = () => {
  const [currentOrderValue] = useState(409); // Updated to the current order value
  const [minimumOrderValue, setMinimumOrderValue] = useState(2500);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "insideTN") {
      setMinimumOrderValue(2500);
    } else if (selectedValue === "outsideTN") {
      setMinimumOrderValue(5000);
    }
  };

  const amountRemaining = Math.max(minimumOrderValue - currentOrderValue, 0);

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
            <option value="insideTN">Inside Tamil Nadu</option>
            <option value="outsideTN">Outside Tamil Nadu</option>
          </select>
        </div>
      </section>
      <section className="container my-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="cartline"></div>
            <div className="row my-4">
              <div className="col-lg-2">
                <img src={cartimageone} alt="cartimage" className="cartimage" />
              </div>
              <div className="col-lg-4">
                <div className="cartalignment">
                  <h6 className="cartimagetitle">Kuruvi Crackers</h6>
                  <h6 className="cartimagesubtitle">Brand : Srinivasa</h6>
                  <h6 className="cartimagesubtitle">Content : 5 Pcs / 1 Pkt</h6>
                  <h6 className="cartimagesubtitle">In Stock</h6>
                  <h6 className="cartimagesubtitle">Market Price : ₹ 40 </h6>
                </div>
              </div>
              <div className="col-lg-2">
                <h6 className="cartimagesidetitle">Price</h6>
                <h6 className="cartimagetitle1">₹ 8.00</h6>
              </div>
              <div className="col-lg-2">
                <h6 className="cartimagesidetitle">Quantity</h6>
                <h6 className="cartimagetitle1">3</h6>
              </div>
              <div className="col-lg-2">
                <h6 className="cartimagesidetitle">Total</h6>
                <h6 className="cartimagetitle1">₹ 24.00</h6>
              </div>
              <div className="cartlinebtm"></div>
            </div>
            <div className="row my-4">
              <div className="col-lg-2">
                <img src={cartimagetwo} alt="cartimage" className="cartimage" />
              </div>
              <div className="col-lg-4">
                <div className="cartalignment">
                  <h6 className="cartimagetitle">Ground Chakkar Big (25Pc)</h6>
                  <h6 className="cartimagesubtitle">Brand : Srivatsaa</h6>
                  <h6 className="cartimagesubtitle">
                    Content : 25 Pcs / 1 Pkt
                  </h6>
                  <h6 className="cartimagesubtitle">In Stock</h6>
                  <h6 className="cartimagesubtitle">Market Price : ₹ 370 </h6>
                </div>
              </div>
              <div className="col-lg-2">
                <h6 className="cartimagesidetitle">Price</h6>
                <h6 className="cartimagetitle1">₹ 75.00</h6>
              </div>
              <div className="col-lg-2">
                <h6 className="cartimagesidetitle">Quantity</h6>
                <h6 className="cartimagetitle1">5</h6>
              </div>
              <div className="col-lg-2">
                <h6 className="cartimagesidetitle">Total</h6>
                <h6 className="cartimagetitle1">₹ 375.00</h6>
              </div>
              <div className="cartlinebtm"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div className="cartalignment">
                  <h6 className="cartimagetitle">2 Items</h6>
                </div>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-2"></div>
              <div className="col-lg-2">
                <h6 className="cartimagetitle1">₹ 399.00</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <h6 className="cartrightsidetitle"> ENTER PROMO CODE</h6>
            <div class="input-group mb-3">
              <input
                type="text"
                className="inputcode"
                placeholder="Promo Code"
                aria-label="Promo Code"
                aria-describedby="button-addon2"
              />
              <button className="inputcodebtn" type="button" id="button-addon2">
                Submit
              </button>
            </div>
            <div className="cartrightsidedisplay mt-5">
              <h6 className="cartimagesidesubtitle">Shipping Cost</h6>
              <h6 className="cartimagesidesubtitle">BTC</h6>
            </div>
            <div className="cartrightsidedisplay my-1">
              <h6 className="cartimagesidesubtitle">Discount</h6>
              <h6 className="cartimagesidesubtitle">₹ 0.00</h6>
            </div>
            <div className="cartrightsidedisplay my-1">
              <h6 className="cartimagesidesubtitle">Packing Tax (2.5%)</h6>
              <h6 className="cartimagesidesubtitle">₹ 9.98</h6>
            </div>
            <div className="cartrightsidedisplay my-1">
              <h6 className="cartimagesidesubtitle">Round Off</h6>
              <h6 className="cartimagesidesubtitle">₹ 0.02</h6>
            </div>
            <div className="cartrightsidedisplay my-2">
              <h6 className="cartimagesidetotal">Estimated Total</h6>
              <h6 className="cartimagesidetotal">₹ 409</h6>
            </div>
            <div>
              <h6 className="cartrightshipping my-5">
                You're{" "}
                <span className="cartrightshippingcolor">
                  ₹ {amountRemaining}
                </span>{" "}
                away from the minimum order!
              </h6>
            </div>
            <div>
              <Link to="/Checkout">
                <button className="checkbtn">
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
