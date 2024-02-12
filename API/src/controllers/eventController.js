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

exports.createEvent = async (req, res, next) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      eventDate: req.body.eventDate,
      location: req.body.location,
      price: req.body.price,
      tickets: req.body.tickets,
    };
    const event = await Event.create(data);
    res.status(201).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    if(!mongoose.isValidObjectId(eventId)){
        return next( new ErrorHandler("Event Id Is not Valid", 403))
    }
    const currentEvent = await Event.findOne({ _id: eventId });
    if (!currentEvent) {
      return next(new ErrorHandler("event doesnt exist", 404));
    }
    const data = {
      title: req.body.title || currentEvent.title,
      description: req.body.description || currentEvent.description,
      eventDate: req.body.eventDate || currentEvent.eventDate,
      location: req.body.location || currentEvent.location,
      price: req.body.price || currentEvent.price,
      tickets: req.body.tickets || currentEvent.tickets,
    };
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: eventId },
      data,
      { new: true },
    )
    res.status(200).json({
      success: true,
      updatedEvent,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteEvent = async (req, res, next) => {
  try {
    const eventId = req.params.id;
    if(!mongoose.isValidObjectId(eventId)){
        return next( new ErrorHandler("Event Id Is not Valid", 403))
    }
    const event = await Event.findOneAndDelete({ _id: eventId });
    if (!event) {
      return next(new ErrorHandler("event doesnt exist", 404));
    }
    res.status(200).json({
      success: true,
      message: "Event deleted successfully !",
    });
  } catch (error) {
    next(error);
  }
};
