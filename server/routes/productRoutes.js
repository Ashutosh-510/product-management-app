const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

router.post("/products", protect, createProduct);
router.get("/products", protect, getProducts);
router.get("/products/:id", protect, getProductById);
router.put("/products/:id", protect, updateProduct);
router.delete("/products/:id", protect, deleteProduct);

module.exports = router;
