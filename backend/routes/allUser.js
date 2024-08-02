const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router.get("/allUser", async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
