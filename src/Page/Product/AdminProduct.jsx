import React, { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboad";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { supabase } from "../../supabaseClient"; // Ensure you have this import
import Swal from "sweetalert2";

export default function AdminProduct() {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    productCode: "",
    productName: "",
    productDetails: "",
    mrp: "",
    ourPrice: "",
    category: "",
    newArrival: false,
    imageUrl: "",
  });
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data);
    }
  };

  const fetchCategories = async () => {
    try {
      console.log("Fetching categories...");
      const { data, error } = await supabase.from("category").select("*");
      if (error) {
        throw error;
      }
      console.log("Fetched categories:", data);
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      Swal.fire("Error", "Failed to load categories", "error");
    }
  };

  const handleClose = () => {
    setShow(false);
    setEditingProductId(null);
    setFormData({
      productCode: "",
      productName: "",
      productDetails: "",
      mrp: "",
      ourPrice: "",
      category: "",
      newArrival: false,
      imageUrl: "",
    });
  };
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const fileInput = document.getElementById("fileInput");
      let newImageUrl = formData.imageUrl;

      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];

        const fileSizeInMB = file.size / (1024 * 1024);
        if (fileSizeInMB > 1) {
          Swal.fire({
            icon: "error",
            title: "File Too Large",
            text: "The image size should not exceed 1 MB.",
          });
          return;
        }

        const fileName = `${Date.now()}_${file.name}`;

        if (editingProductId && formData.imageUrl) {
          const oldImagePath = formData.imageUrl.split("/").pop();
          if (oldImagePath) {
            const { error: deleteError } = await supabase.storage
              .from("Images")
              .remove([`ProductImages/${oldImagePath}`]);

            if (deleteError) {
              console.error("Error deleting old image:", deleteError);
            }
          }
        }

        const { data, error } = await supabase.storage
          .from("Images")
          .upload(`ProductImages/${fileName}`, file);

        if (error) {
          console.error("Error uploading file:", error);
          Swal.fire("Error!", "Failed to upload image.", "error");
          return;
        }

        newImageUrl = `ProductImages/${fileName}`;
      }

      const productData = {
        product_code: formData.productCode,
        product_name: formData.productName,
        product_details: formData.productDetails,
        mrp: formData.mrp,
        our_price: formData.ourPrice,
        image_url: newImageUrl,
        category: formData.category,
        is_new_arrival: formData.newArrival,
      };

      let result;
      if (editingProductId) {
        result = await supabase
          .from("products")
          .update(productData)
          .eq("id", editingProductId);
      } else {
        result = await supabase.from("products").insert([productData]);
      }

      const { error } = result;

      if (error) {
        console.error("Error adding/updating product:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while adding/updating the product!",
        });
      } else {
        console.log("Product added/updated successfully");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product added/updated successfully!",
        });
        handleClose();
        fetchProducts();
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleEdit = (product) => {
    setFormData({
      productCode: product.product_code,
      productName: product.product_name,
      productDetails: product.product_details,
      mrp: product.mrp,
      ourPrice: product.our_price,
      category: product.category,
      newArrival: product.is_new_arrival,
      imageUrl: product.image_url,
    });
    setEditingProductId(product.id);
    setShow(true); // This opens the modal
  };

  const handleDelete = async (productId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      // First, fetch the product to get the image_url
      const { data: product, error: fetchError } = await supabase
        .from("products")
        .select("image_url")
        .eq("id", productId)
        .single();

      if (fetchError) {
        console.error("Error fetching product:", fetchError);
        Swal.fire("Error!", "Failed to fetch the product.", "error");
        return;
      }

      // Delete the image from the storage bucket
      if (product.image_url) {
        const imagePath = product.image_url.split("/").pop(); // Get the filename
        const { error: deleteImageError } = await supabase.storage
          .from("Images")
          .remove([`ProductImages/${imagePath}`]);

        if (deleteImageError) {
          console.error("Error deleting image:", deleteImageError);
          // You might want to decide whether to proceed with product deletion if image deletion fails
        }
      }

      // Now delete the product from the database
      const { error: deleteProductError } = await supabase
        .from("products")
        .delete()
        .eq("id", productId);

      if (deleteProductError) {
        console.error("Error deleting product:", deleteProductError);
        Swal.fire("Error!", "Failed to delete the product.", "error");
      } else {
        Swal.fire(
          "Deleted!",
          "The product and its image have been deleted.",
          "success"
        );
        fetchProducts();
      }
    }
  };
  return (
    <Dashboard>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Product Page</h1>

        <Button variant="primary" type="submit" onClick={handleShow}>
          Add Product
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Code</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Details</th>
            <th>MRP</th>
            <th>Our Price</th>
            <th>Category</th>
            <th>New Arrival</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.product_code}</td>
              <td>
                <img
                  src={`https://ndabevturhrddprzhkcb.supabase.co/storage/v1/object/public/Images/${product.image_url}`}
                  alt={product.product_name}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{product.product_name}</td>
              <td>{product.product_details}</td>
              <td>{product.mrp}</td>
              <td>{product.our_price}</td>
              <td>{product.category}</td>
              <td>{product.is_new_arrival ? "Yes" : "No"}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingProductId ? "Edit Product" : "Add New Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="productCode">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                name="productCode"
                value={formData.productCode}
                onChange={handleInputChange}
                placeholder="Product code"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Product Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productDetails">
              <Form.Label>Product Details (for example: 10pcs/box)</Form.Label>
              <Form.Control
                type="text"
                name="productDetails"
                value={formData.productDetails}
                onChange={handleInputChange}
                placeholder="Product Details"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mrp">
              <Form.Label>MRP</Form.Label>
              <Form.Control
                type="number"
                name="mrp"
                value={formData.mrp}
                onChange={handleInputChange}
                placeholder="MRP"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ourPrice">
              <Form.Label>Our Price</Form.Label>
              <Form.Control
                type="number"
                name="ourPrice"
                value={formData.ourPrice}
                onChange={handleInputChange}
                placeholder="Our Price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                style={{ color: "#000" }} // Ensure text is visible
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.category}
                    style={{ color: "#000" }}
                  >
                    {category.category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="newArrival">
              <Form.Check
                type="checkbox"
                name="newArrival"
                checked={formData.newArrival}
                onChange={handleInputChange}
                label="New Arrival"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productImage">
              <Form.Label>Image (Max 1 MB)</Form.Label>
              <Form.Control
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Please upload an image less than 1 MB in size.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : editingProductId ? "Update" : "Add"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Dashboard>
  );
}
