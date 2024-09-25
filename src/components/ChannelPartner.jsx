import React, { useEffect, useState } from "react";
import partner from "../Assets/Images/partner.webp";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

const ChannelPartner = () => {
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
        "https://sheet.best/api/sheets/00705f78-8aeb-4a85-8550-9fcd16dc6451",
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
            text: "Request submitted successfully, Our Team Will Reach You Soon.",
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
            text: "Something went wrong. Please try again.",
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
              <img src={partner} alt="Partner" className="chitimage" />
            </div>
            <div className="col-lg-4">
              <form onSubmit={(e) => handleSubmit(e)}>
                <h4 className="founderparaspan"> REGISTER HERE </h4>
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
                    type="number"
                    placeholder="Enter Phone Number"
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
                    type="email"
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
                {/* <div>
                <label className="labeltext">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="fieldinput"
                />
              </div> */}
                {/* <div>
                <label className="labeltext">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Enter Confirm Password"
                  className="fieldinput"
                />
              </div> */}
                <div>
                  <button
                    type="submit"
                    className="button"
                    disabled={buttonDisabled || loading}
                  >
                    Register
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
          <p>
            Become a Channel Partner and, of course, a brand ambassador for
            www.Srivatsaacelebrations.com to earn extra through your own network
            or during the festival season.
          </p>
          <h3 className="founderparaspan">
            Earn with Srivatsaacelebrations.com
          </h3>
          <p>Get 5% of each sale... from every single customer!</p>
          <p>
            <li className="paraspacing">
              There is no cost. Simply join up for free and we will contact you
              further!
            </li>
            <li className="paraspacing">Commissions are paid monthly!</li>
          </p>
          <h3 className="founderparaspan">
            HOW THE CHANNEL PARTNER PROGRAM WORKS
          </h3>
          <p>
            <li className="paraspacing">
              You are required to fill the sign up form to get through our
              evaluation process
            </li>
            <li className="paraspacing">
              Once you are being added to our partner’s network, you will be
              given with the unique Agent code.
            </li>
            <li className="paraspacing">
              You are required to share the agent code with your network to whom
              you are promoting about www.Srivatsaacelebrations.com
            </li>
            <li className="paraspacing">
              For every purchase they make, you will be given with 10% of
              commission.
            </li>
            <li className="paraspacing">
              You will get 10% from their product price bill amount, exclusive
              of GST & Card transaction fee in your account.
            </li>
          </p>
          <p>
            Say for an example, if your contact has purchased the products worth
            of ₹10,000/-, the itemized billing details will be,
          </p>
          <table class="table table-bordered tablecolor my-5">
            <thead>
              <tr>
                <th scope="col">Product Purchase Price</th>
                <th scope="col">₹8,475</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GST @ 18% (Borne by Srivatsaacelebrations.com)</td>
                <td>₹1,525</td>
              </tr>
              <tr>
                <td>Total Bill Cost to Srivatsaacelebrations.com</td>
                <td>₹10,000/-</td>
              </tr>
              <tr>
                <td>Transaction Fee @2%</td>
                <td>₹200 (Borne by Srivatsaacelebrations.com)</td>
              </tr>
              <tr>
                <td>Total Value</td>
                <td>₹10,200/-</td>
              </tr>
            </tbody>
          </table>
          <p>
            For your commission, the numbers will be considered only from
            "Product Price" and rewarded with 10%. So in this case,
          </p>
          <p className="commissiontext">
            Your commission will be ₹8,475*10% = ₹847/-
          </p>
          <h3 className="founderparaspan">
            Channel Partner Agent - Terms & Conditions
          </h3>
          <p>
            <li className="paraspacing">
              You are required to contact www.Srivatsaacelebrations.com team in
              order to get your unique customer agent code.
            </li>
            <li className="paraspacing">
              Every time when your contacts make the purchase, the commission
              will be added to your account.
            </li>
            <li className="paraspacing">
              Your contact should be using agent code. If they haven't signed up
              with your unique agent code at the time of payment, we will not
              consider that the contact came through you. Later conversations
              are strictly not encouraged.
            </li>
            <li className="paraspacing">
              If the contacts have cancelled the order, the commission will not
              be processed for the same.
            </li>
            <li className="paraspacing">
              The commissions are rolled out on monthly basis to your bank
              account either through NEFT/RTGS/Cheque. We strictly do NOT handle
              anything with as cash in hand mode.
            </li>
            <li className="paraspacing">
              If there is a delay in the payment receivables through third
              party, we will consider to check on the backend and process the
              request.
            </li>
            <li className="paraspacing">
              Any fraudulence is found, the management has all the rights to
              waive out the total commissions that the agent has made.
            </li>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ChannelPartner;
