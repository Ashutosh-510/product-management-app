import React, { useState } from "react";
import API from "../api/api"; // Axios instance

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    stock: 0,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/products", product);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          name="stock"
          placeholder="Stock"
          type="number"
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
