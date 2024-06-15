import React, { useEffect } from "react";

const Gokul = () => {
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
                A Message from the Co-Founder and the Finance Expert Desk
              </h6>
              <p className="founderpara">
                On behalf of Srivatsaa Celebrations, we are privileged to work
                in a business that requires absolute honesty, devotion,
                innovation, and wonderful people. I would like to thank our
                valued customers, distributors, suppliers, and our
                organization's employees, who are the foundation of our success.
                And even after nearly four years of developing this firm, we
                still have plenty of room to expand.
              </p>
              <p className="founderpara">
                We were always offering new products and services, ensuring that
                our consumers received the greatest quality for the best price.
                I am pleased to inform everyone that the company is in the
                process of moving into the next stage of growth, with the
                steadfast support of all stakeholders.
              </p>
              <p className="founderpara">
                Quality, Innovation, Consistency, and Dedication have been the
                hallmarks of Srivatsaa Celebration, supported by a technically
                sound and loyal team, allowing the company to produce great
                products to clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gokul;
