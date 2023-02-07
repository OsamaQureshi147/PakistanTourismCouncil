const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: false,
  },
  shortDescription: {
    type: String,
    required: false,
    maxLength: 200,
  },
  city: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  externalLink: {
    type: String,
    required: false,
  },
  lat: {
    type: Number,
    required: false,
  },
  lon: {
    type: Number,
    required: false,
  },
  country: {
    type: String,
    required: true,
    default: "Pakistan",
  },
  address: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  eventDateTime: {
    type: Date,
    required: true,
  },
  organizedBy: {
    type: String,
    required: false,
  },
  contactNum: {
    type: String,
    required: false,
  },
  facebookLink: {
    type: String,
    required: false,
  },
  youtubeLink: {
    type: String,
    required: false,
  },
  instagramLink: {
    type: String,
    required: false,
  },
});

module.exports = Events = mongoose.model("events", EventSchema);
