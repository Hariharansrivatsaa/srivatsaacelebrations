import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import bhim from "../Assets/Payment/bhim.webp";
import upi from "../Assets/Payment/upi.webp";
import gpay from "../Assets/Payment/gpay.webp";
import phonepe from "../Assets/Payment/phonepe.webp";
import paytm from "../Assets/Payment/paytm.webp";
import bankupi from "../Assets/Payment/bankupi.webp";
import icici from "../Assets/Payment/icici.webp";
import cub from "../Assets/Payment/cub.webp";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-7 mx-auto ms-auto">
          <section className="container">
            <div className="my-5">
              <div className="aligntext">
                <p>
                  {" "}
                  Your inquiry will be handled by our delivery team once we
                  receive your money. You can also pay by using Google Pay at{" "}
                  <span className="checkoutpagecolour">73971 48404</span>. If
                  you want to make a cash deposit, please use one of the bank
                  account details provided.
                </p>
                {/* <p>
              {" "}
              Your inquiry will be handled by our delivery team once we receive
              your money. You can also pay by clicking the "Pay Now" button
              below or by using Google Pay at 9043360340. If you want to make a
              cash deposit, please use one of the bank account details provided.
            </p> */}
                {/* <a href="upi://pay?pa=hariharan1024@icici&pn=YourName&cu=INR">
              <button>Pay Now</button>
            </a> */}
                <div class="image-row">
                  <img src={bhim} alt="bhim" className="paymenticon" />
                  <img src={upi} alt="upi" className="paymenticon" />
                  <img src={gpay} alt="upi" className="paymenticon" />
                  <img src={phonepe} alt="upi" className="paymenticon" />
                  <img src={paytm} alt="upi" className="paymenticon" />
                </div>
                <p>
                  You can scan the QR code below to pay with GPay, PhonePe,
                  BHIM, PAYTM, and UPI (supports all UPI apps).
                </p>
                <img src={bankupi} alt="bankupi" className="bankupi my-3" />
              </div>
            </div>
          </section>
          <section className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="paymentbox">
                  <img src={icici} alt="icici" className="bankicon mb-4" />
                  <div>
                    <small> Account Number</small>
                    <h5> 015601575215</h5>
                    <small> Account Holder Name</small>
                    <h5> Arun J</h5>
                    <small>IFSC Code</small>
                    <h5>ICIC0006172</h5>
                    <small>Branch</small>
                    <h5>Sivakasi</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="paymentbox">
                  <img src={cub} alt="cub" className="bankicon mb-4" />
                  <div>
                    <small> Account Number</small>
                    <h5>500101013903103</h5>
                    <small> Account Holder Name</small>
                    <h5> Hariharan K</h5>
                    <small>IFSC Code</small>
                    <h5>CIUB0000648</h5>
                    <small>Branch</small>
                    <h5>Thiruthangal</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
