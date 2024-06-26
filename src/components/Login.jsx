import React from "react";
import loginlogo from "../Assets/Logo/Logo.webp";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <div className="loginbg"></div>
        <div className="center-banner">
          <div className="container">
            <div>
              <div className="login-bg">
                <div className="aligntext">
                  <Link to="/">
                    <img
                      src={loginlogo}
                      alt="Login Logo"
                      className="loginlogo"
                    />
                  </Link>
                </div>
                <h4 className="fw-bold">SIGN IN</h4>
                <p className="fw-bold">
                  <small>Welcome back, Please enter your details.</small>
                </p>
                <div class="fancy">
                  <input type="text" placeholder="Enter Your Mail Id" />
                </div>
                <div class="fancy my-4">
                  <input type="password" placeholder="Enter Your Password" />
                </div>
                <div>
                  <button className="loginbutton">Login</button>
                </div>
                <p className="fw-bold mt-3">
                  <small>
                    Don't have an account ?&nbsp;
                    <span>
                      <Link to="/Register">Sign Up</Link>
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

export default Login;
