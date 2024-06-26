import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import contactbanner from "../Assets/Banner/contactus.webp";

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
                    <input type="text" placeholder="Enter Your Phone Number" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mx-auto ms-auto">
                  <div>
                    <button className="loginbutton">SUBMIT</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;
