const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;
  console.log("Request Body:", req.body);
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await Users.create({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).send(user);
  } catch (err) {
    console.log("Error during user registration:", err);
    res.status(400).json({
      status: "error",
      error: err.message || "Duplicate username or email",
      details: err.errors || {},
    });
  }
});

module.exports = router;
