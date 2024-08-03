// Import dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

// Import all routes
const registerUser = require("./routes/registerUser");
const loginUser = require("./routes/loginUser");
const mainPage = require("./routes/mainPage");
const allUser = require("./routes/allUser");

// Create express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/nitaiInnovationsDB"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Use all routes
app.use("/registerUser", registerUser); // post
app.use("/loginUser", loginUser); // post

app.use("/", mainPage); // get
app.use("/allUser", allUser); // get

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
