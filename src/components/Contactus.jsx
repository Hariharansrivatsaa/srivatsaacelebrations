import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import contactbanner from "../Assets/Banner/contactus.webp";
import mail from "../Assets/Icon/email.webp";
import phone from "../Assets/Icon/phone.webp";
import address from "../Assets/Icon/office.webp";

const Contactus = () => {
  return (
    <>
      <Header />
      <section className="my-3">
        <div className="aboutbanner">
          <img src={contactbanner} alt="Aboutus" className="bannerwidth" />
          <div className="centered">Contact Us</div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h6 className="aligntext iconcolor">Let's Start a Conversation</h6>
          <h5 className="aligntext">
            If you have any questions or remarks, please send us a note.
          </h5>
          <div className="row">
            <div className="col-lg-9 mx-auto ms-auto">
              <form>
                <div className="row my-5">
                  <div className="col-lg-4">
                    <div class="fancycontact">
                      <input type="text" placeholder="Enter Your Name" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div class="fancycontact">
                      <input type="text" placeholder="Enter Your Mail Id" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div class="fancycontact">
                      <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 mx-auto ms-auto">
                    <div>
                      <button className="contactbutton">SUBMIT</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contactbgbox">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 mx-auto ms-auto">
                <div className="contactboxwhite">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="aligntext">
                        <div className="contactcircle">
                          <img src={mail} alt="mail" className="contacticon" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="aligntext">
                        <div className="contactcircle">
                          <img
                            src={phone}
                            alt="mail"
                            className="contacticon1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="aligntext">
                        <div className="contactcircle">
                          <img
                            src={address}
                            alt="mail"
                            className="contacticon1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;
