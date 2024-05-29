import React from "react";
import aboutimage from "../Assets/Images/aboutimage.webp";
import visionmission from "../Assets/Images/visionmission.webp";
import aboutbanner from "../Assets/Banner/about.webp";

const About = () => {
  return (
    <>
      <section className="my-3">
        <div className="aboutbanner">
          <img src={aboutbanner} alt="Aboutus" className="bannerwidth" />
          <div class="centered">About Us</div>
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
    </>
  );
};

export default About;
