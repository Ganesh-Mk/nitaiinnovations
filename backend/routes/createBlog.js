const express = require("express");
const route = express.Router();
const User = require("../models/users");
const Blogs = require("../models/blogs");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

route.post("/", upload.single("image"), async (req, res) => {
  const { username, title, email, desc } = req.body;
  const imageUrl = req.file?.path || "";
  console.log("imageUrl: ", imageUrl);

  try {
    // Check if the title already exists in user's blogs
    const user = await User.findOne({ username, "blogs.title": title });

    if (user) {
      return res.status(400).send({ message: "Blog title already exists for this user", status: "titlesSame" });
    }


    // If title does not exist, proceed to add the blog
    const updatedUser = await User.findOneAndUpdate(
      { username },
      { $push: { blogs: { title, desc, imageUrl } } },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    // Adding user blog to all blogs collection
    await Blogs.create({
      username,
      email,
      title,
      desc,
      imageUrl,
    });

    const blogs = await Blogs.find();
    res.status(200).send({ user: updatedUser, blogs });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = route;
