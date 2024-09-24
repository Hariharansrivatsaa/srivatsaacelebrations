import React, { useState } from "react";
import { account, ID } from "../lib/appwrite";
import { supabase } from "../supabaseClient";
import Swal from "sweetalert2";
import OtpInput from "react-otp-input";
import loginlogo from "../Assets/Logo/Logo.webp";
import { Link, useNavigate } from "react-router-dom";

const RegisterAndVerify = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("collectInfo"); // "collectInfo", "verifyOTP"
  const [userDataId, setUserDataId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCollectInfo = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Create a phone token
      const response = await account.createPhoneToken(
        ID.unique(),
        `+91${phone}`
      );
      setUserDataId(response.userId);
      Swal.fire({
        icon: "success",
        title: "OTP Sent",
        text: "Please check your phone for the OTP",
      });
      setStep("verifyOTP");
    } catch (error) {
      console.error("Error sending OTP:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Failed to send OTP. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a valid 6-digit OTP.",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Verify the OTP
      await account.createSession(userDataId, otp);
      // If OTP verification is successful, proceed with user creation in Supabase
      await handleRegister();
    } catch (error) {
      console.error("Error verifying OTP:", error);
      Swal.fire({
        icon: "error",
        title: "Verification Failed",
        text:
          error.message ||
          "Failed to verify OTP. Please try again or resend OTP.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      const { data, error } = await supabase
        .from("users")
        .insert([{ username: name, email, location, phone, password }]);

      if (error) throw error;

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have been registered successfully!",
      }).then(() => {
        navigate("/Login");
      });
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

  return (
    <section>
      <div className="loginbg"></div>
      <div className="center-banner">
        <div className="container">
          <div className="signup-bg">
            <div className="aligntext">
              <Link to="/">
                <img src={loginlogo} alt="Login Logo" className="loginlogo" />
              </Link>
            </div>
            <h4 className="fw-bold">SIGN UP</h4>
            {step === "collectInfo" && (
              <>
                <p className="fw-bold">
                  <small>Please enter your information to register.</small>
                </p>
                <form onSubmit={handleCollectInfo}>
                  <div className="fancy my-4">
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
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                  <div className="fancy my-4">
                    <div className="input-group">
                      <span className="input-group-text">+91</span>
                      <input
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>
                  <div className="fancy my-4">
                    <input
                      type="text"
                      placeholder="Enter Your Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="loginbutton"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending OTP...
                        </>
                      ) : (
                        "Send OTP"
                      )}
                    </button>
                  </div>
                  <p className="fw-bold mt-3">
                    <small>
                      Already have an account?&nbsp;
                      <span>
                        <Link to="/Login">Sign In</Link>
                      </span>
                    </small>
                  </p>
                </form>
              </>
            )}
            {step === "verifyOTP" && (
              <>
                <h4 className="fw-bold">Verify OTP</h4>
                <p className="fw-bold">
                  <small>Please enter the OTP sent to: +91{phone}</small>
                </p>
                <form onSubmit={handleVerifyOTP}>
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
                    <button
                      type="submit"
                      className="loginbutton"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Verifying...
                        </>
                      ) : (
                        "Verify OTP and Register"
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterAndVerify;
