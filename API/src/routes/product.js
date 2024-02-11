const express = require("express");
const router = express.Router();
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/productController");
const { authenticate, isAdmin } = require("../middlewares/authentication");

router.post("/create", authenticate, isAdmin, createProduct);
router.put("/update/:id", authenticate, isAdmin, updateProduct);
router.delete("/delete/:id", authenticate, isAdmin, deleteProduct);

router.get("/allProducts", getAllProducts);
router.get("/product/:id", getProductById);

module.exports = router;
