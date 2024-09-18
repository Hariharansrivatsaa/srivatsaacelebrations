import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import icon1 from "../Assets/Icon/rocket.webp";
import logo from "../Assets/Logo/Logo.webp";
import order from "../Assets/Gif/order1.gif";
import cart from "../Assets/Gif/cart.gif";
import { useAuthStore } from "../Store/useAuthStore";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <>
      <section>
        <div className="marquee">
          <Marquee direction="left" delay="2" scrolldelay="90" loop="infinite">
            <div>
              <img src={icon1} alt="crackers" className="marqueeicon" /> &nbsp;
              Our organization complies with all legal requirements, ensuring
              our shops and go-downs follow explosive acts, and we use
              recognized transport providers. Online firecracker sales are
              prohibited by the 2018 Supreme Court ruling, and we respect this
              regulation. To order, add items to your basket and submit an
              inquiry. We'll confirm your order via WhatsApp or phone within 24
              hours. Celebrate Diwali with Srivatsaa Celebrations.
            </div>
          </Marquee>
        </div>
      </section>
      <section className="my-2">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Srivatsaa" className="logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavCollapse}
              aria-controls="navbarNav"
              aria-expanded={!isNavCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${
                !isNavCollapsed ? "show" : ""
              }`}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    className="nav-link headerlinktitle"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Product"
                    className="nav-link headerlinktitle"
                    activeClassName="active"
                  >
                    Our Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Quickorder"
                    className="nav-link headerlinktitle"
                    activeClassName="active"
                  >
                    Quick Purchase
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Chit"
                    className="nav-link headerlinktitle"
                    activeClassName="active"
                  >
                    Chit Schemes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Corporate"
                    className="nav-link headerlinktitle"
                    activeClassName="active"
                  >
                    Bulk/Corporate Order
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Contactus"
                    className="nav-link headerlinktitle"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Login"
                    className="nav-link headerlinktitle"
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Cart Icon Section */}
            <div className="nav-item">
              <Link to="/Cart" className="nav-link headerlinktitle">
                <span className="badge">1</span>
                <img src={cart} alt="cart" className="carticon" />
              </Link>
            </div>
          </div>
        </nav>
      </section>
      <section>
        <a
          href="https://api.whatsapp.com/send?phone=9514561008&text=&source=&data="
          className="whatsApp floating"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp my-whatsApp"></i>
        </a>
      </section>

      <section>
        <Link to="/Admindashboard" className="ordernow floating">
          <img src={order} alt="Order" className="ordergif" />
        </Link>
      </section>
    </>
  );
};

export default Header;
