import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginlogo from "../Assets/Logo/Logo.webp";

const ForgetPassword = () => {
  const [phone, setPhone] = useState("");
  return (
    <>
      <section>
        <div className="loginbg"></div>
        <div className="center-banner">
          <div className="container">
            <div>
              <div className="signup-bg">
                <div className="aligntext">
                  <Link to="/">
                    <img
                      src={loginlogo}
                      alt="Login Logo"
                      className="loginlogo"
                    />
                  </Link>
                </div>
                <h4 className="fw-bold">FORGET PASSWORD</h4>
                <p className="fw-bold">
                  <small> Please Enter Mobile Number</small>
                </p>
                <div className="fancy my-4">
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={10}
                  />
                </div>
                <div>
                  <Link to="/Getotp">
                    <button type="submit" className="loginbutton">
                      Get OTP
                    </button>
                  </Link>
                </div>

                <div className="cartrightsidedisplay">
                  <p className="fw-bold mt-3">
                    <small>
                      <span>
                        <Link to="/Register">Back</Link>
                      </span>
                    </small>
                  </p>
                  <p className="fw-bold mt-3">
                    <small>
                      Already have an account?&nbsp;
                      <span>
                        <Link to="/Login">Sign In</Link>
                      </span>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
