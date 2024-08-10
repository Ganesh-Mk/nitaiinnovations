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
const clearAllBlogs = require("./routes/clearAllBlogs");
const userData = require("./routes/userData");
const editBlog = require("./routes/editBlog");

const app = express();

// CORS configuration
const corsOptions = {
  origin: ["https://nitaiinnovations.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["*"],
};

app.use("/uploads", express.static("uploads"));
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests for all routes

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
  .catch((err) => console.log("Not Connected to MongoDB: ", err));

// Routes with /api prefix
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/registerUser", registerUser);
app.use("/loginUser", loginUser);
app.use("/createBlog", createBlog);
app.use("/allUser", allUser);
app.use("/clearAllBlogs", clearAllBlogs);
app.use("/clearAllUser", clearAllUser);
app.use("/allBlogs", allBlogs);
app.use("/getUserData",userData )
app.use("/editBlog", editBlog);


// Error handling middleware
app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", corsOptions.origin);
  res.status(err.status || 500);
  res.json({ error: err.message });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
