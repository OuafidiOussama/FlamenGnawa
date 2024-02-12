const express = require("express");
const router = express.Router();
const { authenticate, isAdmin } = require("../middlewares/authentication");
const { createEvent, updateEvent, getAllEvents, getEventById } = require("../controllers/eventController");

router.post("/create", authenticate, isAdmin, createEvent);
router.put("/update/:id", authenticate, isAdmin, updateEvent);


router.get("/allEvents", getAllEvents);
router.get("/event/:id", getEventById);

module.exports = router;
