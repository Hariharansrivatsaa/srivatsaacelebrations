import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

const Corporate = () => {
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
    if (!create.Designation) {
      validdateData.Designation = "Designation is Required";
      Status = false;
    }
    if (!create.Company) {
      validdateData.Company = "Company is Required";
      Status = false;
    }
    if (!create.Gst) {
      validdateData.Gst = "GST is Required";
      Status = false;
    }
    if (!create.Pan) {
      validdateData.Pan = "Pan is Required";
      Status = false;
    }
    if (!create.Employee) {
      validdateData.Employee = "Employee is Required";
      Status = false;
    }
    if (!create.Location) {
      validdateData.Location = "Location is Required";
      Status = false;
    }
    if (!create.Address) {
      validdateData.Address = "Address is Required";
      Status = false;
    }
    if (!create.Giftbox) {
      validdateData.Giftbox = "Gift Box Count is Required";
      Status = false;
    }
    if (!create.Budget) {
      validdateData.Budget = "Budget is Required";
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
        "https://sheet.best/api/sheets/ba8603c3-8dbd-4987-a5e9-4698aaada65f",
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <h5 className="headingtitle">Corporate / Bulk Enquiries</h5>
            <div className="row my-4">
              <div className="col-lg-4">
                <h4 className="founderparaspan">PERSONAL DETAILS</h4>
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
                    className="fieldinput"
                    placeholder="Enter Your Phone Number"
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
                <div>
                  <label className="labeltext">Designation</label>
                  <input
                    type="text"
                    placeholder="Enter Designation"
                    className="fieldinput"
                    name="Designation"
                    onChange={(e) => {
                      setData(e.target.value, "Designation");
                    }}
                  />
                  {validation.Designation && (
                    <p className="validationmsg">{validation.Designation}</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <h4 className="founderparaspan">COMPANY INFORMATION</h4>
                <div>
                  <label className="labeltext">Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter Company Name"
                    className="fieldinput"
                    name="Company"
                    onChange={(e) => {
                      setData(e.target.value, "Company");
                    }}
                  />
                  {validation.Company && (
                    <p className="validationmsg">{validation.Company}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">GSTIN</label>
                  <input
                    type="text"
                    placeholder="Enter GSTIN"
                    className="fieldinput"
                    name="Gst"
                    onChange={(e) => {
                      setData(e.target.value, "Gst");
                    }}
                  />
                  {validation.Gst && (
                    <p className="validationmsg">{validation.Gst}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">PAN</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter PAN"
                    className="fieldinput"
                    name="Pan"
                    onChange={(e) => {
                      setData(e.target.value, "Pan");
                    }}
                  />
                  {validation.Pan && (
                    <p className="validationmsg">{validation.Pan}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">No of Employees</label>
                  <input
                    type="text"
                    placeholder="Enter No of Employees"
                    className="fieldinput"
                    name="Employee"
                    onChange={(e) => {
                      setData(e.target.value, "Employee");
                    }}
                  />
                  {validation.Employee && (
                    <p className="validationmsg">{validation.Employee}</p>
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
                  {validation.Employee && (
                    <p className="validationmsg">{validation.Employee}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">Address</label>
                  <textarea
                    type="text"
                    placeholder="Enter Address"
                    className="fieldinput"
                    name="Address"
                    onChange={(e) => {
                      setData(e.target.value, "Address");
                    }}
                  />
                  {validation.Address && (
                    <p className="validationmsg">{validation.Address}</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <h4 className="founderparaspan">ENQUIRY INFORMATION</h4>
                <div>
                  <label className="labeltext">Total Gift Boxes needed:</label>
                  <input
                    type="text"
                    placeholder="Enter Total"
                    className="fieldinput"
                    name="Giftbox"
                    onChange={(e) => {
                      setData(e.target.value, "Giftbox");
                    }}
                  />
                  {validation.Giftbox && (
                    <p className="validationmsg">{validation.Giftbox}</p>
                  )}
                </div>
                <div>
                  <label className="labeltext">
                    Tentative budget per employee (INR):
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Budget"
                    className="fieldinput"
                    name="Budget"
                    onChange={(e) => {
                      setData(e.target.value, "Budget");
                    }}
                  />
                  {validation.Budget && (
                    <p className="validationmsg">{validation.Budget}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mx-auto ms-auto">
                <div>
                  <button
                    type="submit"
                    className="button"
                    disabled={buttonDisabled || loading}
                  >
                    Submit
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
      </section>
      <Footer />
    </>
  );
};

export default Corporate;
