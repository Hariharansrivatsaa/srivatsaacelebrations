import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import contactbanner from "../Assets/Banner/contactus.webp";
import mail from "../Assets/Icon/email.webp";
import phone from "../Assets/Icon/phone.webp";
import address from "../Assets/Icon/office.webp";
import Swal from "sweetalert2";

const Contactus = () => {
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
        "https://sheet.best/api/sheets/e0ba3baf-5ac7-4a71-bbcb-df677ab33ef7",
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
      <section className="my-3">
        <div className="aboutbanner">
          <img src={contactbanner} alt="Aboutus" className="bannerwidth" />
          <div className="centered">Contact Us</div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h6 className="aligntext iconcolor">Let's Start a Conversation</h6>
          <h5 className="aligntext">
            If you have any questions or remarks, please send us a note.
          </h5>
          <div className="row">
            <div className="col-lg-9 mx-auto ms-auto">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row my-5">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-3">
                    <div class="fancycontact">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="Name"
                        onChange={(e) => {
                          setData(e.target.value, "Name");
                        }}
                      />
                    </div>
                    {validation.Name && (
                      <p className="validationmsg">{validation.Name}</p>
                    )}
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-3">
                    <div class="fancycontact">
                      <input
                        type="text"
                        placeholder="Enter Your Mail Id"
                        name="Email"
                        onChange={(e) => {
                          setData(e.target.value, "Email");
                        }}
                      />
                    </div>
                    {validation.Email && (
                      <p className="validationmsg">{validation.Email}</p>
                    )}
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-3">
                    <div class="fancycontact">
                      <input
                        type="number"
                        placeholder="Enter Your Phone Number"
                        name="Number"
                        onChange={(e) => {
                          setData(e.target.value, "Number");
                        }}
                        min="0"
                        onWheel={handleWheel} // Prevent scroll from changing the value
                      />
                    </div>
                    {validation.Number && (
                      <p className="validationmsg">{validation.Number}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-3 mx-auto ms-auto">
                    <div>
                      <button
                        type="submit"
                        className="contactbutton"
                        disabled={buttonDisabled || loading}
                      >
                        SUBMIT
                        {loading ? (
                          <i class="fa fa-circle-o-notch fa-spin"></i>
                        ) : (
                          ""
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="contactbgbox">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 col-md-11 col-sm-11 col-11 mx-auto ms-auto">
                <div className="contactboxwhite">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
                      <div className="aligntext">
                        <div className="contactcircle my-1">
                          <img src={mail} alt="mail" className="contacticon" />
                        </div>
                        <h5 className="my-2 contactboxtext"> Email</h5>
                        <p className="contactboxpara">
                          For Purchase : purchase@srivatsaacelebrations.com
                        </p>
                        <p className="contactboxpara">
                          For Payment : payment@srivatsaacelebrations.com
                        </p>
                        <p className="contactboxpara">
                          For Delivery : delivery@srivatsaacelebrations.com
                        </p>
                        <p className="contactboxpara">
                          For General : contact@srivatsaacelebrations.com
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="aligntext">
                        <div className="contactcircle my-1">
                          <img
                            src={phone}
                            alt="mail"
                            className="contacticon1"
                          />
                        </div>
                        <h5 className="my-2 contactboxtext"> Phone</h5>
                        <p className="contactboxpara">
                          For Purchase : 95145 61008
                        </p>
                        <p className="contactboxpara">
                          For Payment : 73580 08404
                        </p>
                        <p className="contactboxpara">
                          For Delivery : 93616 42123
                        </p>
                        <p className="contactboxpara">
                          For General : 70102 78339
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="aligntext">
                        <div className="contactcircle my-1">
                          <img
                            src={address}
                            alt="mail"
                            className="contacticon1"
                          />
                        </div>
                        <h5 className="my-2 contactboxtext"> Address</h5>
                        <p className="contactboxpara">
                          1 / 176Z, vadamalapuram to Sukkurarpatti Main
                        </p>
                        <p className="contactboxpara">
                          Road, Thiruthangal, Sivakasi - 626 130
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;
