import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import Swal from "sweetalert2";
import Dashboard from "../../components/Dashboad";
// import Dashboard from "../../components/Dashboad/Dashboard ";

export default function CategoryPage() {
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
    <Dashboard>
      <h1>Category Page</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          name="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
          style={{ padding: "5px", marginRight: "10px" }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "6px 12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>

      <table
        style={{ marginTop: "30px", width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>#</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Category
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {index + 1} {/* Serial number */}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {category.category}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  style={{
                    marginRight: "10px",
                    padding: "4px 8px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleEdit(category)}
                >
                  Edit
                </button>
                <button
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Dashboard>
  );
}
