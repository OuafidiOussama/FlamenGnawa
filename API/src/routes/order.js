const express = require("express");
const router = express.Router();
const { authenticate, isAdmin } = require("../middlewares/authentication");
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require("../controllers/orderController");

router.post("/create", authenticate, createOrder);
router.put("/update/:id", authenticate, isAdmin, updateOrder);
router.delete("/delete/:id", authenticate, isAdmin, deleteOrder);

router.get("/allOrders", authenticate, getAllOrders);
router.get("/order/:id", authenticate, getOrderById);

module.exports = router;
