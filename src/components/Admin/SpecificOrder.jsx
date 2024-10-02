import React, { useEffect, useState } from "react";
import Adminheader from "./Adminheader";
import Adminsidebar from "./Adminsidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Import jsPDF autotable for better table handling

const SpecificOrder = () => {
  const { id } = useParams(); // Get the order ID from the URL parameters
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id);

    if (error) {
      console.error("Error fetching order:", error);
      setError(error);
    } else {
      setOrderData(data[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching order: {error.message}</div>;
  }

  if (!orderData) {
    return <div>No order found.</div>;
  }

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
            <div className="container">
              <h5 className="pagetitle my-4">
                {" "}
                <span class="rotated">
                  <Link to="/AdminOrder">➟</Link>
                </span>{" "}
                Order Details
              </h5>
              <div className="mainpagecontent">
                {orderData.checkout
                  .sort((a, b) => {
                    const aTimestamp = Object.keys(a)[0];
                    const bTimestamp = Object.keys(b)[0];
                    return new Date(bTimestamp) - new Date(aTimestamp);
                  })
                  .map((checkoutEntry, index) => {
                    const timestamp = Object.keys(checkoutEntry)[0];
                    const products = checkoutEntry[timestamp];

                    return (
                      <div key={index}>
                        <h5 className="orderedtext my-3">
                          Ordered Date : {timestamp}
                        </h5>
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
                            {products.map((item, idx) => {
                              if (item.product_code) {
                                return (
                                  <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.Total}</td>
                                  </tr>
                                );
                              } else {
                                return null;
                              }
                            })}
                            <tr>
                              <td colSpan="2" style={{ textAlign: "right" }}>
                                <strong>Total Items:</strong>
                              </td>
                              <td>
                                {products.find((item) => item["Total Items"])?.[
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
                                {products.find(
                                  (item) => item["Total Amount"]
                                )?.["Total Amount"] || 0}
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="2" style={{ textAlign: "right" }}>
                                <strong>Estimated Total:</strong>
                              </td>
                              <td colSpan="2">
                                ₹
                                {products.find(
                                  (item) => item["Estimated Total"]
                                )?.["Estimated Total"] || 0}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <button
                          className="btn btn-primary my-3"
                          onClick={() =>
                            navigate(`/SpecificOrderPdf`, {
                              state: { timestamp, products },
                            })
                          }
                        >
                          View PDF for {timestamp}
                        </button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SpecificOrder;
