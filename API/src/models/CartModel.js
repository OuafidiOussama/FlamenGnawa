const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    trim: true,
    required: [true, "Please Provide Your Item Quantity"],
  },
  product: {
    type: ObjectId,
    ref: "products",
  },
});

module.exports = mongoose.model("carts", cartSchema);
