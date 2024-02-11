const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { authenticate, isAdmin } = require("../middlewares/authentication");

router.post("/create", authenticate, isAdmin, createCategory);
router.put("/update/:id", authenticate, isAdmin, updateCategory);
router.delete("/delete/:id", authenticate, isAdmin, deleteCategory);

router.get("/allCategories", getAllCategories);
router.get("/category/:id", getCategoryById);

module.exports = router;
