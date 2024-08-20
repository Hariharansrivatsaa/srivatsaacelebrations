import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const SidebarItem = ({ title, linkTo }) => (
  <Link to={linkTo} className="sidebar-item">
    {title}
  </Link>
);

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <SidebarItem title="Category" linkTo="/admin_cat" />
          <SidebarItem title="Products" linkTo="/admin_product" />
        </nav>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Dashboard;
