const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

// Import routes
const registerUser = require("../routes/registerUser");
const loginUser = require("../routes/loginUser");
const allUser = require("../routes/allUser");
const createBlog = require("../routes/createBlog");
const clearAllUser = require("../routes/clearAllUser");
const allBlogs = require("../routes/allBlogs");
const clearAllBlogs = require("../routes/clearAllBlogs");
const userData = require("../routes/userData");
const editBlog = require("../routes/editBlog");
const updateUser = require("../routes/updateUser");
const deleteBlog = require("../routes/deleteBlog");

const app = express();

// CORS configuration
// const corsOptions = {
//   origin: ["https://nitaiinnovations.vercel.app", "http://localhost:5173"],
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   allowedHeaders: ["Content-Type", "Authorization"], // Specify headers you expect
// };

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Handle preflight requests for all routes

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
// mongoose
//   .connect(
//     process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/nitaiInnovationsDB"
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("Not Connected to MongoDB: ", err));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World Bro");
});
app.use("/registerUser", registerUser);
app.use("/loginUser", loginUser);
app.use("/createBlog", createBlog);
app.use("/allUser", allUser);
app.use("/clearAllBlogs", clearAllBlogs);
app.use("/clearAllUser", clearAllUser);
app.use("/allBlogs", allBlogs);
app.use("/getUserData", userData);
app.use("/editBlog", editBlog);
app.use("/updateUser", updateUser);
app.use("/deleteBlog", deleteBlog);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error from backend: ", err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
