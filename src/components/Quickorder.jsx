import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Quickorder = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <table>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Content</th>
              <th>Price ₹</th>
              <th>Our Price ₹</th>
              <th>Quantity</th>
              <th>Total ₹</th>
            </tr>
            <tr>
              <td colspan="8" className="tableheading">
                Single Sound Crackers
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>2¾” KURUVI CRACKERS / 2¾” குருவி </td>
              <td></td>
              <td>1 Pkt / 5 Pcs</td>
              <td>
                <del>40</del>
              </td>
              <td>8</td>
              <td>
                <input type="number" />
              </td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3½” LAKSHMI CRACKERS / 3½” லக்ஷ்மி  </td>
              <td></td>
              <td>1 Pkt / 5 Pcs</td>
              <td>
                <del>70</del>
              </td>
              <td>14</td>
              <td>
                <input type="number" />
              </td>
              <td>0</td>
            </tr>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Quickorder;
