import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginlogo from "../Assets/Logo/Logo.webp";
import { supabase } from "../supabaseClient";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs";
import { useAuthStore } from "../Store/useAuthStore";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("users")
        .select()
        .ilike("email", username.trim());

      if (error) throw error;

      if (data && data.length === 1) {
        const user = data[0];
        if (user.password === password) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
          }).then(() => {
            useAuthStore.getState().setLogin(true);
            navigate("/");
          });
        } else {
          throw new Error("Invalid email or password");
        }
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

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
                <form onSubmit={handleLogin}>
                  <div className="fancy">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
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
                    <button type="submit" className="loginbutton">
                      Login
                    </button>
                  </div>
                </form>
                <div className="cartrightsidedisplay">
                  <p className="fw-bold mt-3">
                    <small>
                      Don't have an account?&nbsp;
                      <span>
                        <Link to="/Register">Sign Up</Link>
                      </span>
                    </small>
                  </p>
                  <p className="fw-bold mt-3">
                    <small>
                      <span>
                        <Link to="/ForgetPassword">Forget Password ?</Link>
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

export default Login;
