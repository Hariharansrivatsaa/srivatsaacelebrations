import React, { useEffect, useRef, useState } from "react";
import transport from "../Assets/Icon/truck.webp";
import payment from "../Assets/Icon/payment.webp";
import best from "../Assets/Icon/best-seller.webp";
import checklist from "../Assets/Icon/checklist.webp";
import banner1 from "../Assets/Banner/banner1.webp";
import banner2 from "../Assets/Banner/banner2.webp";
import banner3 from "../Assets/Banner/banner3.webp";
import cracker1 from "../Assets/Icon/icon2.webp";
import cracker2 from "../Assets/Icon/icon4.webp";
import cracker3 from "../Assets/Icon/icon3.webp";
import cracker4 from "../Assets/Icon/icon1.webp";
import box from "../Assets/Images/box.webp";
import box1 from "../Assets/Images/box1.webp";
import box2 from "../Assets/Images/box2.webp";
import box3 from "../Assets/Images/box3.webp";
import box4 from "../Assets/Images/box4.webp";
import add50 from "../Assets/Banner/50 add.webp";
import add70 from "../Assets/Banner/70 add.webp";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CountUp from "react-countup";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } //
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <section className="my-4">
        <div className="container-fluid">
          <div className="row">
            <OwlCarousel
              className="owl-theme"
              loop
              autoplay={true}
              items="1"
              dots={false}
              smartSpeed={1000}
              nav={false}
              margin={20}
              center={true}
              autoplayTimeout={5000}
            >
              <div className="">
                <img src={banner1} alt="logo" className="client-logo" />
              </div>
              <div className="">
                <img src={banner2} alt="logo" className="client-logo" />
              </div>
              <div className="">
                <img src={banner3} alt="logo" className="client-logo" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="borderline">
                <div className="row">
                  <div className="col-lg-3">
                    <img src={transport} alt="logo" className="iconsize" />
                  </div>
                  <div className="col-lg-9">
                    <h6 className="icontext">Super Fast Delivery</h6>
                    <h6 className="iconsubtext">Best transport Support</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="borderline">
                <div className="row">
                  <div className="col-lg-3">
                    <img src={checklist} alt="logo" className="iconsize" />
                  </div>
                  <div className="col-lg-9">
                    <h6 className="icontext">Minimum Order Value</h6>
                    <h6 className="iconsubtext">
                      For Tamil Nadu and Pondichery - Rs 2499/-, <br />
                      For other states - Rs 4999/-.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="borderline">
                <div className="row">
                  <div className="col-lg-3">
                    <img src={best} alt="logo" className="iconsize" />
                  </div>
                  <div className="col-lg-9">
                    <h6 className="icontext">Best Brand - Best Quality</h6>
                    <h6 className="iconsubtext">Premium-Grade Crackers</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-3">
                  <img src={payment} alt="logo" className="iconsize" />
                </div>
                <div className="col-lg-9">
                  <h6 className="icontext">Payment Options</h6>
                  <h6 className="iconsubtext">
                    We accept UPI & Account payments.
                    <br />
                    Cash on Delivery isn't available.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h6 className="itemtitle"> Latest Products</h6>
          <div className="row">
            <OwlCarousel
              className="owl-theme"
              loop
              autoplay={true}
              items="1"
              dots={false}
              smartSpeed={500}
              nav={false}
              margin={20}
              center={true}
              autoplayTimeout={2000}
              responsive={{
                360: {
                  items: "3",
                },
                414: {
                  items: "3",
                },
                670: {
                  items: "3",
                },
                992: {
                  items: "3",
                },
                1200: {
                  items: "5",
                },
              }}
            >
              <div className="itemcard">
                <img src={box} alt="fancy" className="itemimage" />
                <h6 className="itemname">30 Shot Crackling</h6>
                <p>(1pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 500 </del> &nbsp;
                  <ins className="inserttag"> ₹ 200</ins>
                </p>
              </div>
              <div className="itemcard">
                <img src={box1} alt="fancy" className="itemimage" />
                <h6 className="itemname">Tik Tok Fancy</h6>
                <p>(3pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 800 </del> &nbsp;
                  <ins className="inserttag"> ₹ 520</ins>
                </p>
              </div>
              <div className="itemcard">
                <img src={box2} alt="fancy" className="itemimage" />
                <h6 className="itemname">Peacock Fancy</h6>
                <p>(1pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 900 </del> &nbsp;
                  <ins className="inserttag"> ₹ 700</ins>
                </p>
              </div>
              <div className="itemcard">
                <img src={box3} alt="fancy" className="itemimage" />
                <h6 className="itemname">Chakkar Deluxe</h6>
                <p>(10pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 300 </del> &nbsp;
                  <ins className="inserttag"> ₹ 120</ins>
                </p>
              </div>
              <div className="itemcard">
                <img src={box4} alt="fancy" className="itemimage" />
                <h6 className="itemname">7 Shot Crackling</h6>
                <p>(5pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 600 </del> &nbsp;
                  <ins className="inserttag"> ₹ 280</ins>
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="crackerlooking">
        <div className="row">
          <div className="col-lg-8 mx-auto ms-auto">
            <div className="lookingfor">
              <h6 className="lookingtitle">What You Looking For ?</h6>
              <div className="row">
                <div className="col-lg-3">
                  <img className="lookingicon" src={cracker1} alt="crackers" />
                  <h6 class="lookingicontitle">Gift Boxes</h6>
                  <p className="lookingiconcontent">
                    Exciting assortments of fireworks packaged in vibrant boxes,
                    perfect for gifting joy and celebration to loved ones.
                  </p>
                </div>
                <div className="col-lg-3">
                  <img className="lookingicon" src={cracker2} alt="crackers" />
                  <h6 class="lookingicontitle">Night time crackers</h6>
                  <p className="lookingiconcontent">
                    Spectacular bursts of color and light paint the night sky
                    with dazzling displays and crackling sounds, perfect for
                    enchanting celebrations.
                  </p>
                </div>
                <div className="col-lg-3">
                  <img className="lookingicon" src={cracker3} alt="crackers" />
                  <h6 class="lookingicontitle">Day time crackers</h6>
                  <p className="lookingiconcontent">
                    Daylight pyrotechnics! Loud bangs, bright flashes, and smoke
                    add excitement to daytime events.
                  </p>
                </div>
                <div className="col-lg-3">
                  <img className="lookingicon" src={cracker4} alt="crackers" />
                  <h6 class="lookingicontitle">Kids Collections</h6>
                  <p className="lookingiconcontent">
                    Safe, fun fireworks for little ones, featuring colorful
                    sparks and gentle pops for joyful celebrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <h6 className="itemtitle"> Super Deals</h6>
          <div className="row">
            <OwlCarousel
              className="owl-theme"
              loop
              autoplay={true}
              items="1"
              dots={false}
              smartSpeed={500}
              nav={false}
              margin={20}
              center={true}
              autoplayTimeout={2000}
              responsive={{
                360: {
                  items: "3",
                },
                414: {
                  items: "3",
                },
                670: {
                  items: "3",
                },
                992: {
                  items: "3",
                },
                1200: {
                  items: "5",
                },
              }}
            >
              <div className="itemcard">
                <img src={box} alt="fancy" className="itemimage" />
                <h6 className="itemname">30 Shot Crackling</h6>
                <p>(1pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 500 </del> &nbsp;
                  <ins className="inserttag"> ₹ 200</ins>
                </p>
              </div>
              <div className="itemcard">
                <img src={box1} alt="fancy" className="itemimage" />
                <h6 className="itemname">Tik Tok Fancy</h6>
                <p>(3pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 800 </del> &nbsp;
                  <ins className="inserttag"> ₹ 520</ins>
                </p>
              </div>
              <div className="itemcard">
                <img src={box2} alt="fancy" className="itemimage" />
                <h6 className="itemname">Peacock Fancy</h6>
                <p>(1pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 900 </del> &nbsp;
                  <ins className="inserttag"> ₹ 700</ins>
                </p>
              </div>
              <div className="itemcard">
                <img src={box3} alt="fancy" className="itemimage" />
                <h6 className="itemname">Chakkar Deluxe</h6>
                <p>(10pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 300 </del> &nbsp;
                  <ins className="inserttag"> ₹ 120</ins>
                </p>
              </div>
              <div className="itemcard">
                <img src={box4} alt="fancy" className="itemimage" />
                <h6 className="itemname">7 Shot Crackling</h6>
                <p>(5pc/box)</p>
                <p>
                  <del className="deletetag"> ₹ 600 </del> &nbsp;
                  <ins className="inserttag"> ₹ 280</ins>
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section className="my-5 countbanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto ms-auto">
              <div className="row">
                <div className="col-lg-3">
                  <h6 className="aligntext">
                    <span className="CountUp" ref={ref}>
                      {isInView && <CountUp end={4580} duration={5} />}+
                    </span>
                  </h6>
                  <h6 className="countname"> Glad Satisfied Consumers</h6>
                </div>
                <div className="col-lg-3">
                  <h6 className="aligntext">
                    <span className="CountUp">
                      {isInView && <CountUp end={20} duration={5} />}+
                    </span>
                  </h6>
                  <h6 className="countname"> Certified Agents</h6>
                </div>
                <div className="col-lg-3">
                  <h6 className="aligntext">
                    <span className="CountUp">
                      {isInView && <CountUp end={120} duration={5} />}+
                    </span>
                  </h6>
                  <h6 className="countname"> Varieties</h6>
                </div>
                <div className="col-lg-3">
                  <h6 className="aligntext">
                    <span className="CountUp">
                      {isInView && <CountUp end={3} duration={5} />}+
                    </span>
                  </h6>
                  <h6 className="countname"> Factories & Outlets</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 mx-auto ms-auto">
              <div className="row">
                <div className="col-lg-6">
                  <img src={add50} alt="banner" className="addbanner" />
                </div>
                <div className="col-lg-6">
                  <img src={add70} alt="banner" className="addbanner" />
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

export default Home;
