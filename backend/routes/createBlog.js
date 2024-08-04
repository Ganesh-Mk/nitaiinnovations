const express = require("express");
const route = express.Router();
const User = require("../models/users");
const Blogs = require("../models/blogs");

route.post("/", async (req, res) => {
  const { username, title, email, desc } = req.body;

  try {
    // adding blog to user blogs collection
    const user = await User.findOneAndUpdate(
      { username },
      { $push: { blogs: { title, desc } } },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // adding user blog to all blogs collection
    await Blogs.create({
      username,
      email,
      title,
      desc,
    });

    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = route;
