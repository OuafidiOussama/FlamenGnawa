const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Please Provide Your Event Title"],
    },
    eventPicture: {
      type: String,
      trim: true,
      required: [true, "Please Provide Your Event Picture"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Please Provide Your Event Description"],
    },
    eventDate: {
      type: Date,
      required: [true, "Please Provide Your Event Date"],
    },
    location: {
      type: String,
      trim: true,
      required: [true, "Please Provide Your Event Location"],
    },
    price: {
      type: Number,
      required: [true, "Please Provide Your Event Price"],
    },
    tickets: {
      type: Number,
      required: [true, "Please Provide Your Available Tickets Number"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("events", eventSchema);
