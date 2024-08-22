const express = require("express");
const route = express.Router();
const Users = require("../../models/users");

route.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = route;
