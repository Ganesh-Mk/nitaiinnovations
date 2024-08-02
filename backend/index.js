// Import dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Import all routes
const registerUser = require("./routes/registerUser");
const loginUser = require("./routes/loginUser");
const allUser = require("./routes/allUser");

// Create express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/nitaiBackend")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Use all routes
app.use(registerUser);
app.use(loginUser);
app.use(allUser);

// Start server
app.listen(3000, () => console.log("Server started on port 3000"));
