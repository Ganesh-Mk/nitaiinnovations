const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res
          .status(200)
          .json({ status: "ok", name: user.username, email: user.email });
      } else {
        res
          .status(400)
          .json({ status: "error", error: "Invalid email or password" });
      }
    } else {
      res.status(400).json({ status: "error", error: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", error: "Server error" });
  }
});

module.exports = router;
