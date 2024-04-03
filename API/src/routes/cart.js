const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/authentication");
const {addItemToCart,deleteFromCart,getAllItemsFromCart} = require("../controllers/cartController");

router.post("/add", authenticate, addItemToCart);
router.delete("/delete/:id", authenticate, deleteFromCart);

router.get("/", authenticate, getAllItemsFromCart);

module.exports = router;