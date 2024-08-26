import React, { useEffect, useState } from "react";
import Adminsidebar from "./Adminsidebar";
import Adminheader from "./Adminheader";
import { supabase } from "../../supabaseClient";
import Swal from "sweetalert2";
import editicon from "../../Assets/Svg/edit.svg";
import deleteicon from "../../Assets/Svg/delete.svg";

const AdminCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("category").select("*");
    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      setCategories(data);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("category")
      .insert([{ category: categoryName }]);
    if (error) {
      console.error("Error adding category:", error);
      Swal.fire("Error", "Could not add category", "error");
    } else {
      Swal.fire("Success", "Category added successfully", "success");
      setCategoryName("");
      fetchCategories();
    }
  };

  const handleEdit = async (category) => {
    const { value: newCategoryName } = await Swal.fire({
      title: "Edit Category",
      input: "text",
      inputLabel: "Category Name",
      inputValue: category.category,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (newCategoryName) {
      const { error } = await supabase
        .from("category")
        .update({ category: newCategoryName })
        .eq("id", category.id);

      if (error) {
        console.error("Error updating category:", error);
        Swal.fire("Error", "Could not update category", "error");
      } else {
        Swal.fire("Success", "Category updated successfully", "success");
        fetchCategories();
      }
    }
  };

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
        const { error } = await supabase.from("category").delete().eq("id", id);
        if (error) {
          console.error("Error deleting category:", error);
          Swal.fire("Error", "Could not delete category", "error");
        } else {
          Swal.fire("Deleted!", "Category has been deleted.", "success");
          fetchCategories();
        }
      }
    });
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
              <h5 className="pagetitle my-4"> Category</h5>
              <div className="form-container">
                <form onSubmit={handleSubmit} className="add-form">
                  <input
                    type="text"
                    name="categoryName"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Enter category name"
                    required
                    className="addinput"
                  />
                  <button type="submit" className="addbutton">
                    Add
                  </button>
                </form>
              </div>
              <div className="mainpagecontent">
                <table className="my-5">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Category</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td>{category.category}</td>
                        <td>
                          <button
                            className="tableediticonbutton"
                            onClick={() => handleEdit(category)}
                          >
                            <img
                              src={editicon}
                              className="tableicon"
                              alt="Edit"
                            />
                          </button>
                        </td>
                        <td>
                          <button
                            className="tabledeleteiconbutton"
                            onClick={() => handleDelete(category.id)}
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

export default AdminCategory;
