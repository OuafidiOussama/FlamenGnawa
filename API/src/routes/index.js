const express = require("express");
const router = express.Router();

const userRouter = require("./user");
router.use("/user", userRouter);

const blogRouter = require("./blog");
router.use("/blog", blogRouter);

const productRouter = require("./product");
router.use("/products", productRouter);

const categoryRouter = require("./category");
router.use("/categories", categoryRouter);

const orderRouter = require("./order");
router.use("/orders", orderRouter);

const eventRouter = require("./event");
router.use("/events", eventRouter);

const memberRouter = require("./members");
router.use("/members", memberRouter);
const cartRouter = require("./cart");
router.use("/cart", cartRouter);

const stripeRouter = require("./stripe");
router.use("/stripe", stripeRouter);

module.exports = router;
