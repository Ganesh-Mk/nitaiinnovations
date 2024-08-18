const express = require("express");
const multer = require("multer");
const route = express.Router();
const Users = require("../models/users");

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

route.patch("/", upload.single("image"), async (req, res) => {
  try {
    console.log("Request Body Fields:", req.body);
    console.log("Uploaded File:", req.file);

    const { username, originalEmail, firstName, lastName, email } = req.body;
    const profileImageUrl = req.file ? req.file.path : req.body.profileImageUrl;

    const user = await Users.findOne({ username, email: originalEmail });

    if (user) {
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      if (profileImageUrl) {
        user.profileImageUrl = profileImageUrl; // Update image URL
      }

      await user.save();
      res.status(200).send(user);
    } else {
      res.status(404).send({ status: "error", message: "User not found" });
    }
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send({ status: "error", message: "Server error: " + err });
  }
});

module.exports = route;
