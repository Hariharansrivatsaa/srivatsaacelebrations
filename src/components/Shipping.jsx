import React, { useEffect } from "react";

const Shipping = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="my-5">
        <div className="container">
          <h2>SHIPPING AND DELIVERY POLICY</h2>
          <h5>Generic Shipping & Delivery</h5>
          <p>
            This document explains the shipping policy that applies to consumers
            who make purchases at https://Srivatsaacelebrations.com/#/home. If
            you have any questions, please contact our customer care staff at
            9043360340. or Srivatsaacelebrations@gmail.com.
          </p>
          <h5>Shipping & Delivery Costs</h5>
          <p>
            You, as the consumer, are responsible for paying these fees. We
            recommend that you contact your local Delivery office before placing
            an order on our website, as these fees can be large and we are
            unable to calculate them for you.
          </p>
          <h5>Order Processing Time</h5>
          <p>
            Orders placed before 2 p.m. Monday through Friday are processed and
            shipped the same day; orders placed after that time will be shipped
            the following day. All orders placed over the weekend or on a public
            holiday will be shipped from our warehouse on Monday or the next
            working day.
          </p>
          <h5>Delivery Address & P.O. Boxes</h5>
          <p>
            Please keep in mind that once you've placed your order, we cannot
            change the delivery address. We can only ship the package via lorry
            or bus. We're sorry, but we don't send to PO boxes.
          </p>
          <h5>Tracking Your Order</h5>
          <p>
            Once your product has been shipped, we will send you a confirmation
            email and call with tracking information. If possible, you can track
            your package directly on the carrier's website.
          </p>
        </div>
      </section>
    </>
  );
};

export default Shipping;
