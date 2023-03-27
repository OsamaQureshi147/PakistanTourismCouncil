const Events = require("../../Models/events");

const getAllEvents = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).send(events);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

const getUserEvent = async (req, res) => {
  try {
    const userevent = await Events.find({
      createdBy: req.body.createdBy,
    });
    if (!userevent) {
      res.status(500).send("No Event Found");
    } else {
      console.log("res:" + userevent);
      res.status(200).send(userevent);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

const addNewEvent = async (req, res) => {
  const {
    title,
    longDescription,
    shortDescription,
    city,
    createdBy,
    category,
    externalLink,
    lat,
    lon,
    country,
    address,
    createdAt,
    eventDateTime,
    organizedBy,
    contactNum,
    facebookLink,
    youtubeLink,
    instagramLink,
  } = req.body;

  try {
    let event = new Events({
      title,
      longDescription,
      shortDescription,
      city,
      createdBy,
      category,
      externalLink,
      lat,
      lon,
      country,
      address,
      createdAt,
      eventDateTime,
      organizedBy,
      contactNum,
      facebookLink,
      youtubeLink,
      instagramLink,
    });
    await event.save();
    res.status(200).send("Event added!");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllEvents,
  addNewEvent,
  getUserEvent,
};
