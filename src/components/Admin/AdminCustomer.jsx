import React, { useEffect, useState } from "react";
import Adminsidebar from "./Adminsidebar";
import Adminheader from "./Adminheader";
import { supabase } from "../../supabaseClient";
import Swal from "sweetalert2";
import deleteicon from "../../Assets/Svg/delete.svg";
import { useNavigate } from "react-router-dom";

const AdminCustomer = () => {
  const [categories, setCategories] = useState([]);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      setCategories(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error } = await supabase.from("users").delete().eq("id", id);
        if (error) {
          console.error("Error deleting users:", error);
          Swal.fire("Error", "Could not delete users", "error");
        } else {
          Swal.fire("Deleted!", "users has been deleted.", "success");
          fetchUsers();
        }
      }
    });
  };

  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/SpecificUser/${id}`); // Redirect to OrderSpecific page with the order ID
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
              <h5 className="pagetitle my-4"> User List</h5>
              <div className="mainpagecontent">
                <table className="my-5">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>User Name</th>
                      <th>Mobile Number</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((users, index) => (
                      <tr key={users.id}>
                        <td>{index + 1}</td>
                        <td
                          onClick={() => handleViewClick(users.id)}
                          className="pointer"
                        >
                          {users.username}
                        </td>
                        <td>{users.phone}</td>
                        <td>
                          <button
                            className="tabledeleteiconbutton"
                            onClick={() => handleDelete(users.id)}
                          >
                            <img
                              src={deleteicon}
                              className="tableicon"
                              alt="Delete"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
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

export default AdminCustomer;
