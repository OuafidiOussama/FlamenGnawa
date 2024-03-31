const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const memberSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "users",
  },
  quote: {
    type: String,
    trim: true,
    required: [true, "Please Provide The Member Quote"],
  },
  instrument: {
    type: String,
    trim: true,
    required: [true, "Please Provide The Member Instrument"],
  },
});


module.exports = mongoose.model("members", memberSchema);
