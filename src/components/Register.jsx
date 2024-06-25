import React from "react";
import loginlogo from "../Assets/Logo/Logo.webp";
import { Link } from "react-router-dom";

const Register = () => {
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
                  <small>Welcome, Please enter your details.</small>
                </p>
                <div class="fancy">
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div class="fancy my-4">
                  <input type="text" placeholder="Enter Your MailId" />
                </div>
                <div class="fancy my-4">
                  <input type="text" placeholder="Enter Your Phone Number" />
                </div>
                <div class="fancy my-4">
                  <input type="password" placeholder="Enter Your Password" />
                </div>
                <div>
                  <button className="loginbutton">Register</button>
                </div>
                <p className="fw-bold mt-3">
                  <small>
                    Already have an account ?&nbsp;
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
