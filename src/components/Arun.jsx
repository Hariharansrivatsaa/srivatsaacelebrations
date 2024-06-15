import React, { useEffect } from "react";

const Arun = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto ms-auto">
              <h6 className="foundertitle">
                A Message from the Founder and the Operation’s Expert Desk
              </h6>
              <p className="founderpara">
                On behalf of everyone at Srivatsaa Celebrations, I welcome you
                to our official website. I hope it meets your expectations and
                allows you to learn more about our diverse companies and
                workplace culture.
              </p>
              <p className="founderpara">
                One feature that we have worked hard to convey through this page
                is our strong dedication to the company's continual development,
                which includes consistently developing and growing within our
                different divisions.
              </p>
              <p className="founderpara">
                Our motto is 'Building on Success', and this is what we will
                strive for in the coming years as we consolidate the Group's
                areas. At the same time, we are looking forward to the future
                and all of the wonderful business prospects and challenges that
                may arise. Of course, none of our accomplishment would have been
                possible without the unwavering dedication and collaboration of
                our whole team.
              </p>
              <p className="founderpara">
                I am confident that{" "}
                <span className="founderparaspan">"TRUST"</span> and{" "}
                <span className="founderparaspan">"QUALITY"</span>
                are critical factors in influencing clients to purchase our
                items. Also, I acknowledge that{" "}
                <span className="founderparaspan">"TRUST"</span> and{" "}
                <span className="founderparaspan">"QUALITY"</span> will result
                in a{" "}
                <span className="founderparaspan">"WIN-WIN SITUATION"</span> for{" "}
                <span className="founderparaspan">Srivatsaa Celebrations</span>{" "}
                and our clients."
              </p>
              <p className="founderpara">
                I hope you enjoy visiting our website; but, if it does not
                address all of your questions, we look forward to hearing from
                you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Arun;
