import React from "react";
import Adminheader from "./Adminheader";
import Adminsidebar from "./Adminsidebar";

const Admindashboard = () => {
  return (
    <>
      <div className="alignmentdisplay">
        <div className="sidebaralign">
          <Adminsidebar />
        </div>
        <div className="contentalign">
          <Adminheader />
          <div>
            <h5> Helo everyone</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
