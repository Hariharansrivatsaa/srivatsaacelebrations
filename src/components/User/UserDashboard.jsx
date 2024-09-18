import React from "react";
import UserSidebar from "./UserSidebar";
import UserHeader from "./Userheader";

const UserDashboard = () => {
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
              <h5> User</h5>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
