import React from "react";
import UserSidebar from "./UserSidebar";
import UserHeader from "./Userheader";

const UserProfile = () => {
  const handleWheel = (e) => {
    e.target.blur();
  };

  return (
    <>
      <div className="alignmentdisplay">
        <div className="sidebaralign">
          <UserSidebar />
        </div>
        <div className="contentalign">
          <section>
            <UserHeader />
          </section>
          <section>
            <div className="container">
              <h5> My Profile </h5>
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <label className="labeltext">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="fieldinput"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <label className="labeltext">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      className="fieldinput"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <label className="labeltext">Email ID </label>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="fieldinput"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <label className="labeltext">Location</label>
                    <input
                      type="text"
                      placeholder="Enter Location"
                      className="fieldinput"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <label className="labeltext">Address</label>
                    <textarea
                      type="text"
                      placeholder="Enter Address"
                      className="fieldinput"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div>
                    <label className="labeltext">Pincode</label>
                    <input
                      type="number"
                      placeholder="Enter Pincode"
                      className="fieldinput"
                      min="0"
                      onWheel={handleWheel} 
                    />
                  </div>
                </div>
              </div>
              <div>
                <button className="button">Update</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
