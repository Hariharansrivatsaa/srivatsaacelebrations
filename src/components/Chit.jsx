import React, { useEffect, useState } from "react";
import chit from "../Assets/Banner/chit.webp";
import Header from "./Header";
import Footer from "./Footer";
import "react-phone-input-2/lib/style.css";
import Swal from "sweetalert2";

const Chit = () => {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [create, SetCreate] = useState({});
  const [validation, setValidation] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const CheckValidation = () => {
    let Status = true,
      validdateData = {};
    if (!create.Scheme) {
      validdateData.Scheme = "Scheme Type is Required";
      Status = false;
    }
    if (!create.Name) {
      validdateData.Name = "Name is Required";
      Status = false;
    }
    if (!create.Number) {
      validdateData.Number = "Number is Required";
      Status = false;
    } else if (create.Number.length !== 10) {
      validdateData.Number = "Invalid Number";
      Status = false;
    }
    if (!create.Email) {
      validdateData.Email = "Email is Required";
      Status = false;
    }
    if (!create.Location) {
      validdateData.Location = "Location is Required";
      Status = false;
    }
    setValidation({ ...validation, ...validdateData });
    return Status;
  };

  const setData = (e, key) => {
    SetCreate({ ...create, [key]: e });
    if (validation[key]) setValidation({ ...validation, [key]: false });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (CheckValidation()) {
      const formEle = document.querySelector("form");
      const formDatab = new FormData(formEle);

      fetch(
        "https://sheet.best/api/sheets/54a40779-bc91-430c-ae01-47aec551e03b",
        {
          method: "POST",
          body: formDatab,
        }
      )
        .then((res) => {
          setLoading(false);

          // Show success message with SweetAlert
          Swal.fire({
            title: "Success!",
            text: "Your form has been submitted successfully, Our Team Will Reach You Soon.",
            icon: "success",
            confirmButtonText: "OK",
          });

          // Clear form data after successful submission
          formEle.reset();

          // Optionally reset any form state
          setButtonDisabled(false); // Enable the button again
        })
        .catch((error) => {
          setLoading(false);
          setButtonDisabled(true); // Disable button on error

          // Show error message with SweetAlert
          Swal.fire({
            title: "Error!",
            text: "There was an issue submitting your form. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    } else {
      setLoading(false);
    }
  };

  const handleWheel = (e) => {
    e.target.blur();
  };

  return (
    <>
      <Header />
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <img src={chit} alt="chit" className="chitimage" />
            </div>
            <div className="col-lg-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <h4 className="founderparaspan"> ENQUIRY NOW </h4>
                <div>
                  <label className="labeltext">Scheme Type</label>
                  <select
                    className="fieldinput"
                    name="Scheme"
                    onChange={(e) => {
                      setData(e.target.value, "Scheme");
                    }}
                  >
                    <option value="">Select Option</option>
                    <option value="500">Rs.500 Per Month</option>
                    <option value="650">Rs.650 Per Month</option>
                    <option value="750">Rs.750 Per Month</option>
                    <option value="1000">Rs.1000 Per Month</option>
                    <option value="1250">Rs.1250 Per Month</option>
                    <option value="1500">Rs.1500 Per Month</option>
                    <option value="2000">Rs.2000 Per Month</option>
                    <option value="2500">Rs.2500 Per Month</option>
                  </select>
                  {validation.Scheme && (
                    <p className="validationmsg">{validation.Scheme}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="fieldinput"
                    name="Name"
                    onChange={(e) => {
                      setData(e.target.value, "Name");
                    }}
                  />
                  {validation.Name && (
                    <p className="validationmsg">{validation.Name}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">Phone Number</label>
                  <input
                    type="Number"
                    placeholder="Enter Mobile Number"
                    className="fieldinput"
                    name="Number"
                    onChange={(e) => {
                      setData(e.target.value, "Number");
                    }}
                    min="0"
                    onWheel={handleWheel} // Prevent scroll from changing the value
                  />
                  {validation.Number && (
                    <p className="validationmsg">{validation.Number}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">Email Id</label>
                  <input
                    type="text"
                    placeholder="Enter Email Id"
                    className="fieldinput"
                    name="Email"
                    onChange={(e) => {
                      setData(e.target.value, "Email");
                    }}
                  />
                  {validation.Email && (
                    <p className="validationmsg">{validation.Email}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">Location</label>
                  <input
                    type="text"
                    placeholder="Enter Location"
                    className="fieldinput"
                    name="Location"
                    onChange={(e) => {
                      setData(e.target.value, "Location");
                    }}
                  />
                  {validation.Location && (
                    <p className="validationmsg">{validation.Location}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="button"
                    disabled={buttonDisabled || loading}
                  >
                    Enquiry Now
                    {loading ? (
                      <i class="fa fa-circle-o-notch fa-spin"></i>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h3> Terms & Condition</h3>
          <h5>Chit Due :</h5>
          <p>
            <li className="paraspacing">
              The 10-month scheme begins on December 1, 2024, and finishes on
              September 30, 2025.
            </li>
            <li className="paraspacing">
              Customers have easy payment choices (Google Pay, PhonePe, Net
              Banking, UPI, BHIM, etc.).
            </li>
            <li className="paraspacing">
              You are requested to pay the monthly due amount on or before the
              10th of each month.
            </li>
          </p>
          <h5>Free Shipping :</h5>
          <p>
            <li className="paraspacing">
              Customers from Tamil Nadu and Pondicherry will receive free
              shipping until their pickup location.
            </li>
            <li className="paraspacing">
              The rest of the clients from other states, including Kerala,
              Karnataka, Andhra Pradesh, and Telangana, do not receive free
              shipping.
            </li>
          </p>
          <h5>2025 Diwali Crackers Ordering :</h5>
          <p>
            <li className="paraspacing">
              We will assign the chit credits on or before September 12th, 2025,
              and will disclose the login information for our website.
            </li>
            <li className="paraspacing">
              Choose your favorite crackers from the price list we share over
              WhatsApp, or place your order on our website at
              www.Srivatsaacelebrations.com.
            </li>
            <li className="paraspacing">
              You are requested to complete your cracker purchase before
              September 20th, 2025, and Srivatsaa Celebrations will ship your
              order on or before October 5th, 2025.
            </li>
          </p>
          <h5>Delivery :</h5>
          <p>
            <li className="paraspacing">
              The parcel will be transported by a reputable logistics service
              provider in good packaging condition.
            </li>
            <li className="paraspacing">
              The Srivatsaacelebrations team will notify the customer of the
              shipment details via WhatsApp and phone call, along with a copy of
              the Lorry Receipt (LR), and the customer will be asked to collect
              the item from the transport office.
            </li>
            <li className="paraspacing">
              If a Srivatsaa Celebrations 2025 diwali crackers chit customer
              prefers home delivery (only to Tamil Nadu, Pondy, and Bengaluru,
              excluding hill stations), a portion of the home delivery charge
              must be given to Srivatsaa Celebrations at the time of ordering.
              The home delivery rates vary/apply depending on the city's
              distance from Sivakasi.
            </li>
          </p>
          <h5>Cancellation & Refund :</h5>
          <p>
            <li className="paraspacing">
              Monthly late payments will not be eligible for free shipping
              advantages.
            </li>
            <li className="paraspacing">
              If you terminate the scheme in the middle, you will only receive
              crackers for the amount you paid, with no free delivery.
            </li>
            <li className="paraspacing">
              Cancellation of the chit in the middle will result in receiving
              just crackers for the amount paid so far, not a cash return.
            </li>
            <li className="paraspacing">
              In the event of a default, the company's decision to choose the
              crackers on your behalf and deliver them to the client location is
              final.
            </li>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Chit;
