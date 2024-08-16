import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginlogo from "../Assets/Logo/Logo.webp";
import { supabase } from "../supabaseClient";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting login with:", username); // This now contains the email
      const { data, error } = await supabase
        .from("users")
        .select()
        .ilike("email", username.trim()); // Use ilike for case-insensitive matching and trim the input

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("Query result:", data);

      if (data && data.length === 1) {
        const user = data[0];
        console.log("User found:", user);

        if (user.password === password) {
          // Still using plain text comparison - not recommended for production
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You have been logged in successfully!",
          }).then(() => {
            navigate("/");
          });
        } else {
          throw new Error("Invalid email or password");
        }
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
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
                      type="password"
                      placeholder="Enter Your Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <button type="submit" className="loginbutton">
                      Login
                    </button>
                  </div>
                </form>
                <p className="fw-bold mt-3">
                  <small>
                    Don't have an account?&nbsp;
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
