const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    maxLength: 200,
  },
  bio: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
    default: "contributor",
  },
  contact: {
    type: String,
    required: false,
  },
  profilepic: {
    type: String,
    required: false,
    default: "abc",
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = Users = mongoose.model("users", UsersSchema);
