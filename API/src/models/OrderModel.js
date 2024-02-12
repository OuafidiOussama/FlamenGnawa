const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema({
  cart: [
    {
      type: ObjectId,
      ref: "carts",
      required: true,
    },
  ],
  shippingAddress: {
    type: String,
    trim: true,
    required: [true, "Please Provide a Shipping Address"],
  },
  city: {
    type: String,
    trim: true,
    required: [true, "Please Provide a City"],
  },
  zip: {
    type: String,
    trim: true,
    required: [true, "Please Provide a ZIP Code"],
  },
  country: {
    type: String,
    trim: true,
    required: [true, "Please Provide a Country"],
  },
  phone: {
    type: String,
    trim: true,
    required: [true, "Please Provide a Phone Number"],
  },
  status: {
    type: String,
    default: "Pending",
  },
  totalPrice: {
    type: Number,
  },
  user: {
    type: ObjectId,
    ref: "users",
  },
  dateOrdered: {
    type: Date,
    default: Date.now,
  },
  deleveryDate: {
    type: Date,
  },
});

module.exports = mongoose.model("orders", orderSchema);
