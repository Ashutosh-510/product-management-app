import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api"; // Axios instance

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    stock: 0,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/products/${id}`, product);
      alert("Product updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <input
          name="stock"
          value={product.stock}
          type="number"
          onChange={handleChange}
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
