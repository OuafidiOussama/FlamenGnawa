const express = require("express");
const router = express.Router();
const { authenticate, isAdmin } = require("../middlewares/authentication");
const { createEvent, updateEvent, deleteEvent, getAllEvents, getEventById } = require("../controllers/eventController");

router.post("/create", authenticate, isAdmin, createEvent);
router.put("/update/:id", authenticate, isAdmin, updateEvent);
router.delete("/delete/:id", authenticate, isAdmin, deleteEvent);

router.get("/allEvents", getAllEvents);
router.get("/event/:id", getEventById);

module.exports = router;
