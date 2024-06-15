import React, { useEffect } from "react";
import chit from "../Assets/Banner/chit.webp";
const Chit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <img src={chit} alt="chit" className="chitimage" />
            </div>
            <div className="col-lg-4">
              <h4 className="founderparaspan"> ENQUIRY NOW </h4>
              <div>
                <label className="labeltext">Scheme Type</label>
                <select className="fieldinput">
                  <option value="">Select Option</option>
                  <option value="500">Rs.500 Per Month</option>
                  <option value="650">Rs.650 Per Month</option>
                  <option value="750">Rs.750 Per Month</option>
                  <option value="1000">Rs.1000 Per Month</option>
                  <option value="1250">Rs.1250 Per Month</option>
                  <option value="1500">Rs.1500 Per Month</option>
                  <option value="2000">Rs.2000 Per Month</option>
                  <option value="2500">Rs.2500 Per Month</option>
                </select>
              </div>
              <div>
                <label className="labeltext">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">Email Id</label>
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">Location</label>
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="fieldinput"
                />
              </div>
              <div>
                <button className="button">Enquiry</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h3> Terms & Condition</h3>
          <h5>Chit Due :</h5>
          <p>
            <li className="paraspacing">
              The 10-month scheme begins on December 1, 2024, and finishes on
              September 30, 2025.
            </li>
            <li className="paraspacing">
              Customers have easy payment choices (Google Pay, PhonePe, Net
              Banking, UPI, BHIM, etc.).
            </li>
            <li className="paraspacing">
              You are requested to pay the monthly due amount on or before the
              10th of each month.
            </li>
          </p>
          <h5>Free Shipping :</h5>
          <p>
            <li className="paraspacing">
              Customers from Tamil Nadu and Pondicherry will receive free
              shipping until their pickup location.
            </li>
            <li className="paraspacing">
              The rest of the clients from other states, including Kerala,
              Karnataka, Andhra Pradesh, and Telangana, do not receive free
              shipping.
            </li>
          </p>
          <h5>2025 Diwali Crackers Ordering :</h5>
          <p>
            <li className="paraspacing">
              We will assign the chit credits on or before September 12th, 2025,
              and will disclose the login information for our website.
            </li>
            <li className="paraspacing">
              Choose your favorite crackers from the price list we share over
              WhatsApp, or place your order on our website at
              www.Srivatsaacelebrations.com.
            </li>
            <li className="paraspacing">
              You are requested to complete your cracker purchase before
              September 20th, 2025, and Srivatsaa Celebrations will ship your
              order on or before October 5th, 2025.
            </li>
          </p>
          <h5>Delivery :</h5>
          <p>
            <li className="paraspacing">
              The parcel will be transported by a reputable logistics service
              provider in good packaging condition.
            </li>
            <li className="paraspacing">
              The Srivatsaacelebrations team will notify the customer of the
              shipment details via WhatsApp and phone call, along with a copy of
              the Lorry Receipt (LR), and the customer will be asked to collect
              the item from the transport office.
            </li>
            <li className="paraspacing">
              If a Srivatsaa Celebrations 2025 diwali crackers chit customer
              prefers home delivery (only to Tamil Nadu, Pondy, and Bengaluru,
              excluding hill stations), a portion of the home delivery charge
              must be given to Srivatsaa Celebrations at the time of ordering.
              The home delivery rates vary/apply depending on the city's
              distance from Sivakasi.
            </li>
          </p>
          <h5>Cancellation & Refund :</h5>
          <p>
            <li className="paraspacing">
              Monthly late payments will not be eligible for free shipping
              advantages.
            </li>
            <li className="paraspacing">
              If you terminate the scheme in the middle, you will only receive
              crackers for the amount you paid, with no free delivery.
            </li>
            <li className="paraspacing">
              Cancellation of the chit in the middle will result in receiving
              just crackers for the amount paid so far, not a cash return.
            </li>
            <li className="paraspacing">
              In the event of a default, the company's decision to choose the
              crackers on your behalf and deliver them to the client location is
              final.
            </li>
          </p>
        </div>
      </section>
    </>
  );
};

export default Chit;
