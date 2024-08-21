import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { GetInitials } from "../../Store/constants";

const Adminheader = () => {
  const [profile, setProfile] = useState([]);

  return (
    <>
      <section className="my-2">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            Welcome !
            <div className="d-flex justify-content-between  align-items-center">
              <div className="nav-item nav-link headerlinktitle" to="">
                <div className="dropdown">
                  <span>
                    {!profile?.profileImage ? (
                      <div className="messageimageletternavbar">
                        {/* {GetInitials(profile?.userName)} */} A
                      </div>
                    ) : null}
                    <img
                      className="userprofilenavbar"
                      src={profile?.profileImage}
                      alt=""
                      hidden={!profile?.profileImage}
                    />
                  </span>
                  <div className="dropdown-content">
                    <NavLink to="/Profile">My Profile</NavLink>
                    <NavLink to="/Changepassword">Change Password</NavLink>
                    <NavLink to="/" id="logout-hover">
                      Logout
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Adminheader;
