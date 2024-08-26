import React from "react";
import Adminheader from "./Adminheader";
import Adminsidebar from "./Adminsidebar";

const Admindashboard = () => {
  return (
    <>
      <div className="admin-layout">
        <Adminsidebar />
        <section className="main-content">
          <div className="container">
            <div className="admincontentside">
              <h3>Hello Everyone</h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admindashboard;
