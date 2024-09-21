import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginlogo from "../Assets/Logo/Logo.webp";

const Verifyotp = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
                <h4 className="fw-bold">SIGN UP</h4>
                <p className="fw-bold">
                  <small> Please Create New Password.</small>
                </p>
                <div className="fancy my-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="toggle-visibility"
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={
                        showPassword ? "fas fa-eye-slash" : "fas fa-eye"
                      }
                    ></i>
                  </button>
                </div>
                <div>
                  <Link to="/Login">
                    <button type="submit" className="loginbutton">
                      Register
                    </button>
                  </Link>
                </div>

                <p className="fw-bold mt-3">
                  <small>
                    <span>
                      <Link to="/Getotp">Back</Link>
                    </span>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verifyotp;
