import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo/Logo.webp";
import insta from "../Assets/Icon/insta.webp";
import linkedin from "../Assets/Icon/linkdlin.webp";
import threads from "../Assets/Icon/threads.webp";
import twitter from "../Assets/Icon/twitter (1).webp";
import facebook from "../Assets/Icon/facebook.webp";
import youtube from "../Assets/Icon/youtube.webp";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Link to="/">
                <img src={logo} alt="Srivatsaa" className="footerlogo" />
              </Link>
              <h6 className="footertitle mt-3"> About the outlet</h6>
              <p className="footercontent">
                Srivatsaa Celebrations specializes in wholesale and retail
                firecrackers in Sivakasi, offering a wide range of crackers,
                fancy items, and gift boxes. We supply throughout Tamil Nadu and
                other states year-round for festivals, functions, and
                celebrations. Experience unique and memorable festivities with
                Srivatsaa Celebrations.
              </p>
              <h6 className="footertitle mt-3">Reach Us</h6>
              <h6>
                Address : &nbsp;
                <span className="addresstext">
                  1/176Z Archuna nagar, vadamalapuram to sukkurarpatti main
                  road, keela Thiruthangal, 626123
                </span>
              </h6>
            </div>
            <div className="col-lg-3">
              <h6 className="footertitle mt-3"> Company</h6>
              <ul>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/About"
                  >
                    ⮞&nbsp; About Us
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link footerlinktitle" to="">
                    ⮞&nbsp; Our Gallery
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link footerlinktitle" to="">
                    ⮞&nbsp; Customer Pickup Points
                  </Link>
                </li>

                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/Chit"
                  >
                    ⮞&nbsp; Chit Schemes
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link footerlinktitle" to="/Contactus">
                    ⮞&nbsp; Contact Us
                  </Link>
                </li>
              </ul>
              <div className="blinkbox mt-5">
                <div className="blink_me">Download Pricelist</div>
              </div>
            </div>
            <div className="col-lg-3">
              <h6 className="footertitle mt-3"> Policies</h6>
              <ul>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/Privacypolicy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/TermsandConditions"
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link footerlinktitle" to="">
                    Cancellation & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/Shipping"
                  >
                    Shipping & Delivery Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/Firesafetytips"
                  >
                    Fire Safety Tips
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link footerlinktitle" to="/Faq">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/Importantnotes"
                  >
                    Important Updates
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/Greencrackers"
                  >
                    Green Crackers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 p-0">
              <h6 className="footertitle mt-3"> Quick Links</h6>
              <ul>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/Corporate"
                  >
                    ⮞&nbsp; Bulk/Corporate Orders
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-item nav-link footerlinktitle"
                    to="/ChannelPartner"
                  >
                    ⮞&nbsp; Channel partners
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link footerlinktitle" to="">
                    ⮞&nbsp; Quick Purchase
                  </Link>
                </li>

                <li>
                  <Link className="nav-item nav-link footerlinktitle" to="">
                    ⮞&nbsp; Payment Details
                  </Link>
                </li>
              </ul>
              <h6 className="footertitle mt-3">Follow Us</h6>
              <div>
                <img src={insta} alt="Instagram" className="socialicon" />
                <img src={linkedin} alt="Linkedin" className="socialicon" />
                <img src={threads} alt="Threads" className="socialicon" />
                <img src={twitter} alt="Twitter" className="socialicon" />
                <img src={facebook} alt="Facebook" className="socialicon" />
                <img src={youtube} alt="Youtube" className="socialicon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footerrights">
        <div className="aligntext">
          <h6 className="rightstext">
            Copyright &#169; 2024 Srivatsaa Celebrations. All Rights Reserved.
          </h6>
        </div>
      </section>
    </>
  );
};

export default Footer;
