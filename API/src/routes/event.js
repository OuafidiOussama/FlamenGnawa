const express = require("express");
const router = express.Router();
const { authenticate, isAdmin } = require("../middlewares/authentication");
const { createEvent, getAllEvents, getEventById } = require("../controllers/eventController");

router.post("/create", authenticate, isAdmin, createEvent);


router.get("/allEvents", getAllEvents);
router.get("/event/:id", getEventById);

module.exports = router;
