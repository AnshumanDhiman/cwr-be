const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/db");
const messageRoutes = require("./routes/contactRoute");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDB();

app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Active on Port : ${PORT}`);
});
