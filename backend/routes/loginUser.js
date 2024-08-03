const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign(
          {
            name: user.name,
            email: user.email,
          },
          "#secretKey123"
        );
        res.status(200).send("Login successful");
      } else {
        res.status(400).send("Invalid username or password");
      }
    } else {
      res.status(400).send("User not found");
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Invalid username or password" });
  }
});

module.exports = router;
