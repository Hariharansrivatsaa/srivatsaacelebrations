import React from "react";
import Adminsidebar from "./Adminsidebar";
import Adminheader from "./Adminheader";

const AdminDashboard = () => {
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
              <h5> Admin</h5>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
