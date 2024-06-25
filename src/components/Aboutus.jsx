import React, { useEffect } from "react";
import aboutimage from "../Assets/Images/aboutimage.webp";
import visionmission from "../Assets/Images/visionmission.webp";
import aboutbanner from "../Assets/Banner/about.webp";
import quality from "../Assets/Icon/highquality.webp";
import innovation from "../Assets/Icon/innovation.webp";
import approch from "../Assets/Icon/capacity.webp";
import gokul from "../Assets/Images/Gokul.webp";
import viki from "../Assets/Images/Viki.webp";
import hari from "../Assets/Images/Hari.webp";
import plain from "../Assets/Images/plain.webp";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="my-3">
        <div className="aboutbanner">
          <img src={aboutbanner} alt="Aboutus" className="bannerwidth" />
          <div className="centered">About Us</div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 my-auto">
              <h5 className="headingtitle">
                Srivatsaa Celebrations: Your Premier Destination for Diwali
                Crackers in Sivakasi!
              </h5>
              <div>
                <p className="aboutcontent">
                  We are thrilled to announce that Srivatsaa Celebrations, one
                  of the most popular cracker shops in Sivakasi, is now even
                  closer to bringing joy to our valued customers. This Diwali,
                  let's make some colorful noise and celebrate with the vibrant
                  crackers you've ordered from us.
                </p>
                <p className="aboutcontent">
                  Visit us at www.srivatsaacelebrations.com, developed and
                  marketed by Srivatsaa Celebrations, Sivakasi.
                </p>
                <p className="aboutcontent">
                  Thank you for choosing Srivatsaa Celebrations. We look forward
                  to lighting up your festivities with our spectacular
                  fireworks!
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-auto">
              <div className="aligntext">
                <img src={aboutimage} alt="banner" className="aboutimage" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h6 className="webtext"> Our Mission & Vision</h6>
          <div className="row mt-5">
            <div className="col-lg-6 my-auto">
              <div className="aligntext">
                <img src={visionmission} alt="banner" className="aboutimage" />
              </div>
            </div>
            <div className="col-lg-6 my-auto">
              <p className="aboutcontent">
                <span className="contenthigh">Mission :</span> To bring delight
                and amazing memories to our valued clients by providing
                premium-quality pyrotechnics with outstanding safety, vibrancy,
                and satisfaction.
              </p>
              <p className="aboutcontent">
                <span className="contenthigh">Vision :</span> To be at the
                vanguard of innovative and environmentally aware pyrotechnics,
                dazzling festivities around the world while advocating for
                sustainability and exceeding consumer expectations with each
                spark.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h6 className="webtext"> Our Timeline</h6>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h6 className="webtext aligntext"> Why Choose US</h6>
          <h6 className="aligntext">
            We provide complete service at every stage.
          </h6>
          <div className="row my-1">
            <div className="col-lg-11 mx-auto mx-auto">
              <div className="row">
                <div className="col-lg-4">
                  <div className="aboutcard aligntext">
                    <img src={quality} alt="quality" className="aboutcardimg" />
                    <h6 className="cardtitle aligntext">Unmatched Quality</h6>
                    <p className="cardpara">
                      Srivatsaa Celebrations provides only the greatest quality
                      pyrotechnics, precisely manufactured to provide bright
                      colors, stunning displays, and exceptional safety
                      standards. Our commitment to quality ensures a spectacular
                      and safe celebration for you and your loved ones.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="aboutcard aligntext">
                    <img
                      src={innovation}
                      alt="quality"
                      className="aboutcardimg"
                    />
                    <h6 className="cardtitle aligntext">
                      Innovative and Eco-Friendly Products
                    </h6>
                    <p className="cardpara">
                      We are at the forefront of the pyrotechnics industry,
                      constantly developing to produce eco-friendly fireworks
                      that minimize environmental effect without sacrificing
                      brilliance and thrill. Choose us for a more
                      environmentally friendly, sustainable way to celebrate.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="aboutcard aligntext">
                    <img src={approch} alt="quality" className="aboutcardimg" />
                    <h6 className="cardtitle aligntext">
                      Customer-Centric Approach
                    </h6>
                    <p className="cardpara">
                      Your satisfaction is our top priority. From personalized
                      service to fast delivery and extensive safety information,
                      we go above and beyond to guarantee your experience with
                      us is nothing short of amazing. Trust Srivatsaa
                      Celebrations to provide a flawless and enjoyable festive
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h6 className="webtext aligntext">Meet Our Team</h6>
          <h6 className="aligntext">One Team, One Dream.</h6>
          <div className="row my-1">
            <div className="col-lg-9 mx-auto mx-auto">
              <div className="row">
                <div className="col-lg-4">
                  <div className="teamcard my-5">
                    <img src={plain} alt="Team Image" className="teamimage" />
                    <div className="middle">
                      <Link to="/Arun">
                        <div className="textmore">View More</div>
                      </Link>
                    </div>
                    <h6 className="teamtitle"> Arun J</h6>
                    <h6 className="temsubtitle">
                      Founder & <br /> Operations Expert
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="teamcard my-5">
                    <img src={hari} alt="Team Image" className="teamimage" />
                    <h6 className="teamtitle"> Hariharan K</h6>
                    <div className="middle">
                      <Link to="/Hari">
                        <div className="textmore">View More</div>
                      </Link>
                    </div>
                    <h6 className="temsubtitle">
                      CO-Founder & <br />
                      Chief Executive Officer
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="teamcard my-5">
                    <img src={gokul} alt="Team Image" className="teamimage" />
                    <div className="middle">
                      <Link to="/Gokul">
                        <div className="textmore">View More</div>
                      </Link>
                    </div>
                    <h6 className="teamtitle"> Gokulnath D</h6>
                    <h6 className="temsubtitle">
                      Co-Founder & <br /> Finance Expert
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="teamcard my-5">
                    <img src={plain} alt="Team Image" className="teamimage" />
                    <h6 className="teamtitle"> Manikandan J</h6>
                    <h6 className="temsubtitle">Head - Sales</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="teamcard my-5">
                    <img src={viki} alt="Team Image" className="teamimage" />
                    <h6 className="teamtitle"> Vignesh K</h6>
                    <h6 className="temsubtitle">Head - Marketing</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="teamcard my-5">
                    <img src={plain} alt="Team Image" className="teamimage" />
                    <h6 className="teamtitle"> Ganaga Puspa</h6>
                    <h6 className="temsubtitle">Developer Expert</h6>
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

export default About;
