import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginlogo from "../Assets/Logo/Logo.webp";
import OtpInput from "react-otp-input";

const Getotp = () => {
  const [otp, setOtp] = useState("");

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
                <h4 className="fw-bold">OTP</h4>
                <p className="fw-bold">
                  <small> Please Verify Your OTP.</small>
                </p>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => (
                    <input {...props} className="otpinput" />
                  )}
                />
                <div>
                  <Link to="/Verifyotp">
                    <button type="submit" className="loginbutton">
                      Verify OTP
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

export default Getotp;
