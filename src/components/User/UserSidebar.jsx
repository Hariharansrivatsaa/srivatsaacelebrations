import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/Footerlogo.webp";
import dashboard from "../../Assets/Svg/dashboard.svg";
import dashboardhover from "../../Assets/Svg/dashboardhover.svg";
import order from "../../Assets/Svg/order.svg";
import orderhover from "../../Assets/Svg/orderhover.svg";
import invoice from "../../Assets/Svg/invoice.svg";
import invoicehover from "../../Assets/Svg/invoicehover.svg";
import profile from "../../Assets/Svg/profile.svg";
import profilehover from "../../Assets/Svg/profilehover.svg";

const UserSidebar = () => {
  const [hoveredItems, setHoveredItems] = useState({
    dashboard: false,
    order: false,
    invoice: false,
    profile: false,
  });

  const handleMouseEnter = (item) => {
    setHoveredItems((prevState) => ({
      ...prevState,
      [item]: true,
    }));
  };

  const handleMouseLeave = (item) => {
    setHoveredItems((prevState) => ({
      ...prevState,
      [item]: false,
    }));
  };

  return (
    <>
      <div className="sidebaradmin">
        <section className="aligntext">
          <Link to="/">
            <img src={logo} alt="Srivatsaa" className="adminlogo" />
          </Link>
        </section>
        <section className="sidebarmenu">
          <div>
            <h6 className="sidebarheading">General</h6>
            <Link to="/UserDashboard">
              <div
                className="sidebaritem"
                onMouseEnter={() => handleMouseEnter("dashboard")}
                onMouseLeave={() => handleMouseLeave("dashboard")}
              >
                <img
                  src={hoveredItems.dashboard ? dashboardhover : dashboard}
                  alt="dashboard"
                  className="sidebaricon"
                />
                <h6
                  className={`sidebarheadingtitle ${
                    hoveredItems.dashboard ? "hovered" : ""
                  }`}
                >
                  Dashboard
                </h6>
              </div>
            </Link>
            <Link to="/AdminCategory">
              <div
                className="sidebaritem"
                onMouseEnter={() => handleMouseEnter("order")}
                onMouseLeave={() => handleMouseLeave("order")}
              >
                <img
                  src={hoveredItems.order ? orderhover : order}
                  alt="order"
                  className="sidebaricon"
                />
                <h6
                  className={`sidebarheadingtitle ${
                    hoveredItems.order ? "hovered" : ""
                  }`}
                >
                  Orders
                </h6>
              </div>
            </Link>
            <Link to="/AdminCategory">
              <div
                className="sidebaritem"
                onMouseEnter={() => handleMouseEnter("invoice")}
                onMouseLeave={() => handleMouseLeave("invoice")}
              >
                <img
                  src={hoveredItems.invoice ? invoicehover : invoice}
                  alt="invoice"
                  className="sidebaricon"
                />
                <h6
                  className={`sidebarheadingtitle ${
                    hoveredItems.invoice ? "hovered" : ""
                  }`}
                >
                  Invoices
                </h6>
              </div>
            </Link>
          </div>
          <div>
            <h6 className="sidebarheading">Users</h6>
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("profile")}
              onMouseLeave={() => handleMouseLeave("profile")}
            >
              <img
                src={hoveredItems.profile ? profilehover : profile}
                alt="profile"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.profile ? "hovered" : ""
                }`}
              >
                Profile
              </h6>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserSidebar;
