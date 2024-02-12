const Event = require("../models/EventModel");
const ErrorHandler = require("../utils/errorHandler");
const mongoose = require('mongoose')

exports.getAllEvents = async (req, res, next) => {
  try {
    const Events = await Event.find()
    res.status(200).json({
      success: true,
      Events,
    });
  } catch (error) {
    next(error);
  }
};

exports.getEventById = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    if(!mongoose.isValidObjectId(eventId)){
        return next( new ErrorHandler("Event Id Is not Valid", 403))
    }
    const event = await Event.findOne({ _id: eventId })

    if (!event) {
      return next(new ErrorHandler("Event doesnt exist", 404));
    }
    res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error);
  }
};

