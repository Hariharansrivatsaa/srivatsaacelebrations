import React, { useEffect } from "react";

const Corporate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-5">
        <div className="container">
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
                />
              </div>
              <div>
                <label className="labeltext">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">Email Id</label>
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">Designation</label>
                <input
                  type="text"
                  placeholder="Enter Designation"
                  className="fieldinput"
                />
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
                />
              </div>
              <div>
                <label className="labeltext">GSTIN</label>
                <input
                  type="email"
                  placeholder="Enter GSTIN"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">PAN</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter PAN"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">No of Employees</label>
                <input
                  type="text"
                  placeholder="Enter No of Employees"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">Location</label>
                <input
                  type="text"
                  placeholder="Enter Location"
                  className="fieldinput"
                />
              </div>
              <div>
                <label className="labeltext">Address</label>
                <textarea
                  type="text"
                  placeholder="Enter Address"
                  className="fieldinput"
                />
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
                />
              </div>
              <div>
                <label className="labeltext">
                  Tentative budget per employee (INR):
                </label>
                <input
                  type="text"
                  placeholder="Enter Budget"
                  className="fieldinput"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mx-auto ms-auto">
              <div>
                <button className="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Corporate;
