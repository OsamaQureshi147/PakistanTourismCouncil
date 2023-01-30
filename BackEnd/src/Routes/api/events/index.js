const express = require("express");
const eventController = require("../../../Controllers/events");

const router = express.Router();

router.get("/", eventController.getAllEvents);
router.post("/", eventController.addNewEvent);

module.exports = router;
