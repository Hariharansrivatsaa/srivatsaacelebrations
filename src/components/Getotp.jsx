import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { account } from "../lib/appwrite";
import Swal from "sweetalert2";
import OtpInput from "react-otp-input";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, phone } = location.state || {};
  const [isOtpExpired, setIsOtpExpired] = useState(false);

  useEffect(() => {
    if (!userId || !phone) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Missing user information. Please try registering again.",
      });
      navigate("/Register");
    }
  }, [userId, phone, navigate]);

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    console.log("Verifying OTP for userId:", userId, "OTP:", otp);

    if (!userId) {
      console.error("userId is missing");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "User ID is missing. Please try registering again.",
      });
      return;
    }

    if (otp.length !== 6) {
      console.error("Invalid OTP length");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a valid 6-digit OTP.",
      });
      return;
    }

    try {
      console.log("Calling updatePhoneVerification");
      const result = await account.createSession(userId, otp);
      console.log("OTP verification result:", result);

      Swal.fire({
        icon: "success",
        title: "Phone Verified",
        text: "Your phone number has been successfully verified.",
      });
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      console.error("Error details:", error.message, error.code);

      if (error.code === 401) {
        Swal.fire({
          icon: "error",
          title: "Verification Failed",
          text: "The OTP is invalid or has expired. Please try again or request a new OTP.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Verification Failed",
          text: error.message || "Failed to verify OTP. Please try again.",
        });
      }
    }
  };

  const handleResendOTP = async () => {
    try {
      const token = await account.createPhoneToken(userId, phone);
      console.log("New OTP sent successfully");
      setIsOtpExpired(false);
      Swal.fire({
        icon: "success",
        title: "New OTP Sent",
        text: "Please check your phone for the new OTP",
      });
    } catch (error) {
      console.error("Error resending OTP:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send new OTP. Please try again.",
      });
    }
  };

  return (
    <section>
      <div className="loginbg"></div>
      <div className="center-banner">
        <div className="container">
          <div>
            <div className="signup-bg">
              <h4 className="fw-bold">Verify OTP</h4>
              <p className="fw-bold">
                <small>Please enter the OTP sent to: {phone}</small>
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
              {isOtpExpired && (
                <button onClick={handleResendOTP} className="resendbutton">
                  Resend OTP
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOTP;
