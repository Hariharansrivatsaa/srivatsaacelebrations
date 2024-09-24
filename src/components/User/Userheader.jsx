import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GetInitials } from "../../Store/constants";
import { useAuthStore } from "../../Store/useAuthStore";

const UserHeader = () => {
  const [profile, setProfile] = useState([]);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <section className="my-2">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h4> Welcome User !</h4>
            <div className="d-flex justify-content-between  align-items-center">
              <div className="nav-item nav-link headerlinktitle" to="">
                <div className="dropdown">
                  <span>
                    {!profile?.profileImage ? (
                      <div className="messageimageletternavbar">
                        {/* {GetInitials(profile?.userName)} */} U
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
                    <NavLink to="/UserProfile">My Profile</NavLink>
                    {/* <NavLink to="/Changepassword">Change Password</NavLink> */}
                    <NavLink to="/" id="logout-hover" onClick={handleLogout}>
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

export default UserHeader;
