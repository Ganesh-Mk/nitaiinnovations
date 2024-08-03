// Import dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");

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
  .connect("mongodb://127.0.0.1:27017/nitaiBackend")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Use all routes
app.use("/register", registerUser); // post
app.use("/login", loginUser); // post

app.use("/", mainPage); // get
app.use("/allUser", allUser); // get

// Start server
app.listen(3000, () => console.log("Server started on port 3000"));
