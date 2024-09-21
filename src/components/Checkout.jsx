import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Checkout = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="my-5">
          <h4> Notes</h4>
          <p className="checkoutrules">
            <span className="checkoutrulecolor">⦿</span> For concerns such as
            missing issues or damaged deliveries, please take a parcel opening
            video and submit it to us at{" "}
            <a href="mailto:contact@srivatsaacelebraions.com">
              contact@srivatsaacelebraions.com
            </a>{" "}
            or Whatsapp on +91 95145 61008, For Help +91 93616 42123.
          </p>
          <p className="checkoutrules">
            <span className="checkoutrulecolor">⦿</span> The Supreme Court of
            India has banned the sale of firecrackers beginning in 2018. We
            comply with the ruling and do not allow online cracker purchases.
          </p>
          <p className="checkoutrules">
            <span className="checkoutrulecolor">⦿</span> Place your order 10
            days before Diwali 2024 to prevent last-minute expensive transport
            costs and delays.
          </p>
          <p className="checkoutrules">
            <span className="checkoutrulecolor">⦿</span> 80% + Special Bonus
            Crackers - Special Bonus Carckers is eligible for the confirmation
            order.
          </p>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto ms-auto"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
