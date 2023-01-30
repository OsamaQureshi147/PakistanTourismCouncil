const express = require("express");
const eventControllers = require("../../../Controllers/events");

const router = express.Router();

router.get("/", eventControllers.getAllEvents);
router.post("/", eventControllers.addNewEvent);

module.exports = router;
