const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await Users.create({
      userName,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: "error", error: "Duplicate userName or email" });
  }
});

module.exports = router;
