import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/Footerlogo.webp";
import dashboard from "../../Assets/Svg/dashboard.svg";
import dashboardhover from "../../Assets/Svg/dashboardhover.svg";
import product from "../../Assets/Svg/product.svg";
import producthover from "../../Assets/Svg/producthover.svg";
import category from "../../Assets/Svg/category.svg";
import categoryhover from "../../Assets/Svg/categoryhover.svg";
import inventory from "../../Assets/Svg/inventory.svg";
import inventoryhover from "../../Assets/Svg/inventoryhover.svg";
import order from "../../Assets/Svg/order.svg";
import orderhover from "../../Assets/Svg/orderhover.svg";
import purchase from "../../Assets/Svg/purchase.svg";
import purchasehover from "../../Assets/Svg/purchasehover.svg";
import invoice from "../../Assets/Svg/invoice.svg";
import invoicehover from "../../Assets/Svg/invoicehover.svg";
import profile from "../../Assets/Svg/profile.svg";
import profilehover from "../../Assets/Svg/profilehover.svg";
import role from "../../Assets/Svg/role.svg";
import rolehover from "../../Assets/Svg/rolehover.svg";
import customer from "../../Assets/Svg/customer.svg";
import customerhover from "../../Assets/Svg/customerhover.svg";
import coupon from "../../Assets/Svg/coupon.svg";
import couponhover from "../../Assets/Svg/couponhover.svg";
import review from "../../Assets/Svg/review.svg";
import reviewhover from "../../Assets/Svg/reviewhover.svg";
import chat from "../../Assets/Svg/chat.svg";
import chathover from "../../Assets/Svg/chathover.svg";
import email from "../../Assets/Svg/mail.svg";
import emailhover from "../../Assets/Svg/mailhover.svg";
import calender from "../../Assets/Svg/calendar.svg";
import calenderhover from "../../Assets/Svg/calendarhover.svg";
import todo from "../../Assets/Svg/todo.svg";
import todohover from "../../Assets/Svg/todohover.svg";
import faq from "../../Assets/Svg/faq.svg";
import faqhover from "../../Assets/Svg/faqhover.svg";

const Adminsidebar = () => {
  const [hoveredItems, setHoveredItems] = useState({
    dashboard: false,
    pro: false,
    cat: false,
    inv: false,
    order: false,
    pur: false,
    invoice: false,
    profile: false,
    role: false,
    cus: false,
    coupon: false,
    review: false,
    chat: false,
    email: false,
    calender: false,
    todo: false,
    faq: false,
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
            <Link to="/Admindashboard">
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
                onMouseEnter={() => handleMouseEnter("cat")}
                onMouseLeave={() => handleMouseLeave("cat")}
              >
                <img
                  src={hoveredItems.cat ? categoryhover : category}
                  alt="cat"
                  className="sidebaricon"
                />
                <h6
                  className={`sidebarheadingtitle ${
                    hoveredItems.cat ? "hovered" : ""
                  }`}
                >
                  Categories
                </h6>
              </div>
            </Link>
            <Link to="/AdminProduct">
              <div
                className="sidebaritem"
                onMouseEnter={() => handleMouseEnter("pro")}
                onMouseLeave={() => handleMouseLeave("pro")}
              >
                <img
                  src={hoveredItems.pro ? producthover : product}
                  alt="pro"
                  className="sidebaricon"
                />
                <h6
                  className={`sidebarheadingtitle ${
                    hoveredItems.pro ? "hovered" : ""
                  }`}
                >
                  Products
                </h6>
              </div>
            </Link>
            <Link to="">
              <div
                className="sidebaritem"
                onMouseEnter={() => handleMouseEnter("inv")}
                onMouseLeave={() => handleMouseLeave("inv")}
              >
                <img
                  src={hoveredItems.inv ? inventoryhover : inventory}
                  alt="inventory"
                  className="sidebaricon"
                />
                <h6
                  className={`sidebarheadingtitle ${
                    hoveredItems.inv ? "hovered" : ""
                  }`}
                >
                  Inventories
                </h6>
              </div>
            </Link>
            <Link to="/AdminOrder">
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
            <Link to="">
              <div
                className="sidebaritem"
                onMouseEnter={() => handleMouseEnter("pur")}
                onMouseLeave={() => handleMouseLeave("pur")}
              >
                <img
                  src={hoveredItems.pur ? purchasehover : purchase}
                  alt="purchase"
                  className="sidebaricon"
                />
                <h6
                  className={`sidebarheadingtitle ${
                    hoveredItems.pur ? "hovered" : ""
                  }`}
                >
                  Purchases
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
            {/* <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("role")}
              onMouseLeave={() => handleMouseLeave("role")}
            >
              <img
                src={hoveredItems.role ? rolehover : role}
                alt="role"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.role ? "hovered" : ""
                }`}
              >
                Roles
              </h6>
            </div> */}
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("cus")}
              onMouseLeave={() => handleMouseLeave("cus")}
            >
              <img
                src={hoveredItems.cus ? customerhover : customer}
                alt="customer"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.cus ? "hovered" : ""
                }`}
              >
                Customers
              </h6>
            </div>
          </div>
          <div>
            <h6 className="sidebarheading">Others</h6>
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("coupon")}
              onMouseLeave={() => handleMouseLeave("coupon")}
            >
              <img
                src={hoveredItems.coupon ? couponhover : coupon}
                alt="coupon"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.coupon ? "hovered" : ""
                }`}
              >
                Coupons
              </h6>
            </div>
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("review")}
              onMouseLeave={() => handleMouseLeave("review")}
            >
              <img
                src={hoveredItems.review ? reviewhover : review}
                alt="review"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.review ? "hovered" : ""
                }`}
              >
                Reviews
              </h6>
            </div>
          </div>
          <div>
            <h6 className="sidebarheading">Other Apps</h6>
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("chat")}
              onMouseLeave={() => handleMouseLeave("chat")}
            >
              <img
                src={hoveredItems.chat ? chathover : chat}
                alt="chat"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.chat ? "hovered" : ""
                }`}
              >
                Chat
              </h6>
            </div>
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("email")}
              onMouseLeave={() => handleMouseLeave("email")}
            >
              <img
                src={hoveredItems.email ? emailhover : email}
                alt="email"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.email ? "hovered" : ""
                }`}
              >
                Email
              </h6>
            </div>
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("calender")}
              onMouseLeave={() => handleMouseLeave("calender")}
            >
              <img
                src={hoveredItems.calender ? calenderhover : calender}
                alt="calender"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.calender ? "hovered" : ""
                }`}
              >
                Calender
              </h6>
            </div>
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("todo")}
              onMouseLeave={() => handleMouseLeave("todo")}
            >
              <img
                src={hoveredItems.todo ? todohover : todo}
                alt="todo"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.todo ? "hovered" : ""
                }`}
              >
                Todo
              </h6>
            </div>
          </div>
          <div>
            <h6 className="sidebarheading">Support</h6>
            <div
              className="sidebaritem"
              onMouseEnter={() => handleMouseEnter("faq")}
              onMouseLeave={() => handleMouseLeave("faq")}
            >
              <img
                src={hoveredItems.faq ? faqhover : faq}
                alt="faq"
                className="sidebaricon"
              />
              <h6
                className={`sidebarheadingtitle ${
                  hoveredItems.faq ? "hovered" : ""
                }`}
              >
                FAQs
              </h6>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Adminsidebar;
