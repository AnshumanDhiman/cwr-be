const express = require("express");
const { getContact, postContact } = require("../controllers/contactController");

const router = express.Router();

router.get("/getMessage", getContact);
router.post("/sendMessage", postContact);

module.exports = router;
