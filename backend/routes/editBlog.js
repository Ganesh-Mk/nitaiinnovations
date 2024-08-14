const express = require("express");
const route = express.Router();
const Users = require("../models/users");

route.patch("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const {
      username,
      email,
      changetitle,
      currentTitle,
      changedesc,
      changeimage,
    } = req.body;
    const user = await Users.findOne({ username, email });

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    const blog = user.blogs.find((blog) => blog.title === currentTitle);
    if (!blog) {
      return res.send({ status: "error", message: "Blog not found" });
    }

    if (changetitle) blog.title = changetitle;
    if (changedesc) blog.desc = changedesc;
    if (changeimage) blog.imageUrl = changeimage;
    await user.save();

    res.send({ status: "ok", message: "Blog updated successfully" });
  } catch (err) {
    res.send({ status: "error", message: "Server error: " + err });
  }
});

module.exports = route;
