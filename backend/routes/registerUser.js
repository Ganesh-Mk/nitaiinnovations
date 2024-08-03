const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;
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

    res.send(user);
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate username or email" });
  }
});

module.exports = router;
