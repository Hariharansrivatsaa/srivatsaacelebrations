import React from "react";
import UserSidebar from "./UserSidebar";
import UserHeader from "./Userheader";

const UserOrder = () => {
  return (
    <>
      <div className="alignmentdisplay">
        <div className="sidebaralign">
          <UserSidebar />
        </div>
        <div className="contentalign">
          <section>
            <UserHeader />
          </section>
          <section>
            <div className="container">
              <h5> Order List</h5>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserOrder;
