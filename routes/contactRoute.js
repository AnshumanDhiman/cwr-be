const express = require("express");
const {
  getContact,
  postContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

router.get("/getMessage", getContact);
router.post("/sendMessage", postContact);
router.delete("/deleteMessage/:id", deleteContact);

module.exports = router;
