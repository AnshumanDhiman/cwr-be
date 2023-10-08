const Message = require("../models/contactModel");

exports.postContact = async (req, res) => {
  try {
    const { firstName, lastName, message, email, subject } = req.body;
    const msg = await Message.create({
      firstName,
      lastName,
      message,
      email,
      subject,
    });
    await msg.save();

    res.status(200).json({ success: true, message: msg });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getContact = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
