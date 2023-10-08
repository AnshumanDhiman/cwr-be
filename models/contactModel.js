const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter First name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter Last name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  subject: {
    type: String,
    required: [true, "Please enter a subject"],
  },
  message: {
    type: String,
    required: [true, "Please enter a message"],
  },
});

module.exports = mongoose.model("Message", contactSchema);
