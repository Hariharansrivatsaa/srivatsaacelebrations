import React, { useEffect, useState } from "react";
import Adminheader from "./Adminheader";
import Adminsidebar from "./Adminsidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";

const SpecificUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id);

    if (error) {
      console.error("Error fetching user:", error);
      setError(error);
    } else {
      setUserData(data[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user: {error.message}</div>;
  }

  if (!userData) {
    return <div>No user found.</div>;
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
                <span className="rotated">
                  <Link to="/AdminCustomer">➟</Link>
                </span>
                User Details
              </h5>
              <div className="mainpagecontent">
                <div className="user-details">
                  <p>
                    <strong>Username:</strong> {userData.username}
                  </p>
                  <p>
                    <strong>Email:</strong> {userData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {userData.phone}
                  </p>
                  <p>
                    <strong>Location:</strong> {userData.location}
                  </p>
                  <p>
                    <strong>Password:</strong> {userData.password}
                  </p>
                </div>
                <div className="actions">
                  <button onClick={() => navigate(`/EditUser/${userData.id}`)}>
                    Edit User
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SpecificUser;
