import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import Adminsidebar from "../Adminsidebar";
import Adminheader from "../Adminheader";
import { supabase } from "../../../supabaseClient";

const EditUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    location: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const fetchUserData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id);

    if (error) {
      setError(error);
    } else {
      setUserData(data[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("users")
      .update({
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
        location: userData.location,
        password: userData.password,
      })
      .eq("id", id);

    if (error) {
      setError(error);
    } else {
      setSuccess(true);
      setTimeout(() => {
        navigate("/AdminCustomer");
      }, 1500); // Redirect after 1.5 seconds
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
              <h5 className="pagetitle my-4">Edit User</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={userData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                {success && (
                  <p className="success-message">User updated successfully!</p>
                )}
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EditUser;
