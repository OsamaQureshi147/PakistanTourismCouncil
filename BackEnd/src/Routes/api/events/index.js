const { Router } = require("express");
const eventController = require("../../../Controllers/events");

const router = Router();

router.get("/", eventController.getAllEvents);
router.post("/addNewEvent", eventController.addNewEvent);
router.post("/getuserevents", eventController.getUserEvent);

module.exports = router;
