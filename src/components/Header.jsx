import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import icon1 from "../Assets/Icon/rocket.webp";
import logo from "../Assets/Logo/Logo.webp";
import order from "../Assets/Gif/order1.gif";

const Header = () => {
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
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="row">
              <div className="col-lg-2 col-md-11 col-sm-12 row">
                <div className="col-lg-12 col-6 navbarfix">
                  <Link to="/">
                    <img src={logo} alt="Srivatsaa" className="logo" />
                  </Link>
                </div>
                <div className="col-2 p-0 d-flex align-items: center ms-auto">
                  <button
                    className="navbar-toggler shadow-none ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
              <div className="col-lg-10 col-md-11 col-sm-12 p-0 ms-auto my-auto">
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                >
                  <div className="navbar-nav mx-auto headerlinkspace">
                    <Link
                      className="nav-item nav-link headerlinktitle"
                      to="/About"
                    >
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        About Us
                      </span>
                    </Link>
                    <Link
                      className="nav-item nav-link headerlinktitle"
                      to="/Blog"
                    >
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        Our Products
                      </span>
                    </Link>
                    <Link className="nav-item nav-link headerlinktitle" to="">
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        Quick purchase
                      </span>
                    </Link>
                    <Link
                      className="nav-item nav-link headerlinktitle"
                      to="/Chit"
                    >
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        Chit Schemes
                      </span>
                    </Link>
                    <Link
                      className="nav-item nav-link headerlinktitle"
                      to="/Corporate"
                    >
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        Bulk/Corporate Order
                      </span>
                    </Link>
                    <Link
                      className="nav-item nav-link headerlinktitle"
                      to="/Contact"
                    >
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        Contact Us
                      </span>
                    </Link>
                    <Link
                      className="nav-item nav-link headerlinktitle"
                      to="/Login"
                    >
                      <span
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        Login
                      </span>
                    </Link>
                  </div>
                  <div className="hamburger">
                    <div className="hamburger_btn">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section>
        <a
          href="https://api.whatsapp.com/send?phone=9043360340&text=&source=&data="
          className="whatsApp floating"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp my-whatsApp"></i>
        </a>
      </section>
      <section>
        <Link to="" className="ordernow floating">
          <img src={order} alt="Order" className="ordergif" />
        </Link>
      </section>
    </>
  );
};

export default Header;
