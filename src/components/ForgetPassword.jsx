import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account, ID } from "../lib/appwrite";
import { supabase } from "../supabaseClient";
import Swal from "sweetalert2";
import OtpInput from "react-otp-input";
import loginlogo from "../Assets/Logo/Logo.webp";

const ForgetPassword = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState("enterPhone"); // "enterPhone", "verifyOTP", "resetPassword"
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Check if user exists in Supabase
      const { data, error } = await supabase
        .from("users")
        .select("id")
        .eq("phone", phone)
        .single();

      if (error || !data) {
        throw new Error("User not found. Please check your phone number.");
      }

      setUserId(data.id);

      // Create a phone token without creating a session
      const response = await account.createPhoneToken(
        ID.unique(),
        `+91${phone}`
      );

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
      // Verify the OTP without creating a session
      const response = await account.updatePhoneSession(userId, otp);
      console.log("response", response.type);

      if (response.type === "user_session_already_exists") {
        setStep("resetPassword");
      }

      // If verification is successful, move to password reset step
    } catch (error) {
      if (error.type === "user_session_already_exists") {
        setStep("resetPassword");
      }
      console.error("Error verifying OTP:", error);
      Swal.fire({
        icon: "success",
        title: "Verification",
        text: "Your mobile number already , Verified !",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Passwords do not match. Please try again.",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Update password in Supabase
      const { error: updateError } = await supabase
        .from("users")
        .update({ password: newPassword })
        .eq("id", userId);

      if (updateError) throw updateError;

      Swal.fire({
        icon: "success",
        title: "Password Reset Successful",
        text: "Your password has been updated successfully.",
      }).then(() => {
        navigate("/Login");
      });
    } catch (error) {
      console.error("Error resetting password:", error);
      Swal.fire({
        icon: "error",
        title: "Password Reset Failed",
        text: error.message || "Failed to reset password. Please try again.",
      });
    } finally {
      setIsLoading(false);
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
            <h4 className="fw-bold">FORGET PASSWORD</h4>
            {step === "enterPhone" && (
              <>
                <p className="fw-bold">
                  <small>Please Enter Mobile Number</small>
                </p>
                <form onSubmit={handleSendOTP}>
                  <div className="fancy my-4">
                    <input
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={10}
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="loginbutton"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending OTP..." : "Get OTP"}
                    </button>
                  </div>
                </form>
              </>
            )}
            {step === "verifyOTP" && (
              <>
                <p className="fw-bold">
                  <small>Enter the OTP sent to +91{phone}</small>
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
                      {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>
                  </div>
                </form>
              </>
            )}
            {step === "resetPassword" && (
              <>
                <p className="fw-bold">
                  <small>Enter your new password</small>
                </p>
                <form onSubmit={handleResetPassword}>
                  <div className="fancy my-4">
                    <input
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="fancy my-4">
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="loginbutton"
                      disabled={isLoading}
                    >
                      {isLoading ? "Resetting Password..." : "Reset Password"}
                    </button>
                  </div>
                </form>
              </>
            )}
            <div className="cartrightsidedisplay">
              <p className="fw-bold mt-3">
                <small>
                  <span>
                    <Link to="/Register">Back</Link>
                  </span>
                </small>
              </p>
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
  );
};

export default ForgetPassword;
