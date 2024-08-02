const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router.post("/registerUser", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;
  try {
    const user = await Users.create({
      username,
      firstName,
      lastName,
      email,
      password,
    });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate username or email" });
  }
});

module.exports = router;
