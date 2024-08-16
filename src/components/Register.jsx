import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginlogo from "../Assets/Logo/Logo.webp";
import { supabase } from "../supabaseClient";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("users")
        .insert([{ username: name, email, phone, password }]);

      if (error) throw error;

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have been registered successfully!",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
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
                <form onSubmit={handleRegister}>
                  <div className="fancy">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="fancy my-4">
                    <input
                      type="email"
                      placeholder="Enter Your MailId"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="fancy my-4">
                    <input
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      Register
                    </button>
                  </div>
                </form>
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
