const express = require("express");
const route = express.Router();
const Users = require("../models/users");

route.get("/", async (req, res) => {
  const users = await Users.deleteMany();
  res.send(users);
});

module.exports = route;
