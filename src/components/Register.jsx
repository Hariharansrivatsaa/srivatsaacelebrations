import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginlogo from "../Assets/Logo/Logo.webp";
import { supabase } from "../supabaseClient";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
                <h4 className="fw-bold">SIGN UP</h4>
                <p className="fw-bold">
                  <small>Hello, Please enter your details.</small>
                </p>

                <div className="fancy">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="fancy my-4">
                  <input
                    type="email"
                    placeholder="Enter Your MailId"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
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
      </section>
    </>
  );
};

export default Register;
