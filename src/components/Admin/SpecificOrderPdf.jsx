import React from "react";
import { Link, useLocation } from "react-router-dom";
import Adminheader from "./Adminheader";
import Adminsidebar from "./Adminsidebar";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import logo from "../../Assets/Logo/Logo.webp";

const SpecificOrderPdf = () => {
  const location = useLocation();
  const { timestamp, products } = location.state || {};

  const downloadPDF = () => {
    const element = document.getElementById("order-pdf");
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: `order_${timestamp}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save();
  };

  return (
    <>
      <div className="alignmentdisplay">
        <div className="sidebaralign">
          <Adminsidebar />
        </div>
        <div className="contentalign">
          <section>
            <Adminheader />
          </section>
          <section>
            <h5 className="pagetitle my-4">
              {" "}
              <span class="rotated">
                <Link to="/AdminOrder">➟</Link>
              </span>{" "}
              Order Details
            </h5>
            <div className="container" id="order-pdf">
              <div className="pdfbox">
                <h5 className="pdfheading">
                  Srivatsaa Celebrations - Sivakasi
                </h5>
              </div>
              <div
                className="pdfbox"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h6>
                  {" "}
                  Date : {timestamp.split(",")[0] + timestamp.split(",")[1]}
                </h6>
                <div
                  style={{
                    borderLeft: "1px solid black",
                    height: "20px",
                    margin: "0 10px",
                  }}
                ></div>
                <h6> Time : {timestamp.split(",")[2]}</h6>
              </div>
              <div className="pdfbox">
                <h5>Customer Details</h5>
                <p> Name : </p>
                <p> Phone No : </p>
              </div>
              <table className="my-5">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Total (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item, idx) =>
                    item.product_code ? (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{item.product_name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.Total}</td>
                      </tr>
                    ) : null
                  )}
                  <tr>
                    <td colSpan="2" style={{ textAlign: "right" }}>
                      <strong>Total Items:</strong>
                    </td>
                    <td>
                      {products?.find((item) => item["Total Items"])?.[
                        "Total Items"
                      ] || 0}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "right" }}>
                      <strong>Total Amount:</strong>
                    </td>
                    <td colSpan="2">
                      ₹
                      {products?.find((item) => item["Total Amount"])?.[
                        "Total Amount"
                      ] || 0}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ textAlign: "right" }}>
                      <strong>Estimated Total:</strong>
                    </td>
                    <td colSpan="2">
                      ₹
                      {products?.find((item) => item["Estimated Total"])?.[
                        "Estimated Total"
                      ] || 0}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Button to download PDF */}
            <button onClick={downloadPDF} className="btn btn-primary mt-3">
              Download PDF
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default SpecificOrderPdf;
