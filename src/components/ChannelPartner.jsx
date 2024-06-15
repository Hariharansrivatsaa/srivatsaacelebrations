import React from "react";
import partner from "../Assets/Images/partner.webp";

const ChannelPartner = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <img src={partner} alt="Partner" className="chitimage" />
            </div>
            <div className="col-lg-4">
              <h4 className="founderparaspan"> REGISTER HERE </h4>
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
                <label className="labeltext">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter Confirm Password"
                  className="fieldinput"
                />
              </div>
              <div>
                <button className="button">Register</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <p>
            Become a Channel Partner and, of course, a brand ambassador for
            www.Srivatsaacelebrations.com to earn extra through your own network
            or during the festival season.
          </p>
          <h3 className="founderparaspan">
            Earn with Srivatsaacelebrations.com
          </h3>
          <p>Get 5% of each sale... from every single customer!</p>
          <p>
            <li className="paraspacing">
              There is no cost. Simply join up for free and we will contact you
              further!
            </li>
            <li className="paraspacing">Commissions are paid monthly!</li>
          </p>
        </div>
      </section>
    </>
  );
};

export default ChannelPartner;
