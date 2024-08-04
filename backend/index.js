const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// Import routes
const registerUser = require("./routes/registerUser");
const loginUser = require("./routes/loginUser");
const mainPage = require("./routes/mainPage");
const allUser = require("./routes/allUser");
const createBlog = require("./routes/createBlog");
const clearAllUser = require("./routes/clearAllUser");
const allBlogs = require("./routes/allBlogs");

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "https://nitaiinnovations.vercel.app", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Middleware
app.use(express.json()); // Replaces bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/nitaiInnovationsDB"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Routes
app.use("/registerUser", registerUser);
app.use("/loginUser", loginUser);
app.use("/createBlog", createBlog);
app.use("/", mainPage);
app.use("/allUser", allUser);
app.use("/clearAllUser", clearAllUser);
app.use("/allBlogs", allBlogs);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
