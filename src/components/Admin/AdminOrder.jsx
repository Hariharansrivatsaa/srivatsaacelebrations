import React, { useEffect, useState } from "react";
import Adminsidebar from "./Adminsidebar";
import Adminheader from "./Adminheader";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router-dom";

const AdminOrder = () => {
  const [order, setOrder] = useState([]);

  const fetchOrders = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Error fetching order:", error);
    } else {
      // Filter the orders to only include those with non-empty checkout arrays
      const filteredOrders = data.filter(
        (user) => user.checkout && user.checkout.length > 0
      );
      setOrder(filteredOrders);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/SpecificOrder/${id}`); // Redirect to OrderSpecific page with the order ID
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
            <div className="container">
              <h5 className="pagetitle my-4"> Order Details</h5>
              <div className="mainpagecontent">
                <table className="my-4">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Customer Name</th>
                      <th>View Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.map((order, index) => (
                      <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>{order.username}</td>
                        <td>
                          <button
                            className="viewbtn"
                            onClick={() => handleViewClick(order.id)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                    {order.length === 0 && (
                      <tr>
                        <td colSpan="3">No orders available.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AdminOrder;
