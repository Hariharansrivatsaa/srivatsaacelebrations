import React, { useState } from "react";
import { account, ID } from "../lib/appwrite";
import Swal from "sweetalert2";
import OtpInput from "react-otp-input";
import loginlogo from "../Assets/Logo/Logo.webp";

const RegisterAndVerify = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const generatedUserId = name.replace(/\s+/g, "_").toLowerCase();

      // Make sure userId is unique and valid
      if (generatedUserId.length > 36) {
        throw new Error("User ID must be 36 characters or less.");
      }

      const userAccount = await account.create(
        generatedUserId,
        email,
        password,
        name
      );
      setUserId(userAccount.$id);

      await account.createPhoneToken(ID.unique(), `+91${phone}`);

      console.log("Account created and OTP sent successfully");
      Swal.fire({
        icon: "success",
        title: "OTP Sent",
        text: "Please check your phone for the OTP",
      });

      setIsRegistered(true);
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.message ||
          "Failed to create account and send OTP. Please try again.",
      });
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

    try {
      const result = await account.createSession(userId, otp);
      console.log("OTP verification result:", result);

      Swal.fire({
        icon: "success",
        title: "Phone Verified",
        text: "Your phone number has been successfully verified.",
      });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      Swal.fire({
        icon: "error",
        title: "Verification Failed",
        text:
          error.message ||
          "Failed to verify OTP. Please try again or resend OTP.",
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
              <img src={loginlogo} alt="Login Logo" className="loginlogo" />
            </div>
            <h4 className="fw-bold">SIGN UP</h4>
            {!isRegistered ? (
              <>
                <p className="fw-bold">
                  <small>Hello, Please enter your details.</small>
                </p>
                <form onSubmit={handleRegister}>
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
                  <div>
                    <button type="submit" className="loginbutton">
                      Register & Send OTP
                    </button>
                  </div>
                </form>
              </>
            ) : (
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
                    <button type="submit" className="loginbutton">
                      Verify OTP
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
