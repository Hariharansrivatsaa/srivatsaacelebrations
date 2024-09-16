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

const UserProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section className="my-3">
        <div className="aboutbanner">
          <div className="centered">Profile Page</div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UserProfile;
