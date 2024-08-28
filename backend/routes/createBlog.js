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
    // Fetch the user to get profile image and check if the blog title exists
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Check if the title already exists in user's blogs
    const existingBlog = user.blogs.find((blog) => blog.title === title);

    if (existingBlog) {
      return res.status(400).send({
        message: "Blog title already exists for this user",
        status: "titlesSame",
      });
    }

    const profileImageUrl = user.profileImageUrl || "";

    // Add the blog to user's blogs array
    user.blogs.push({
      title,
      desc,
      imageUrl,
      profileImageUrl, // Add the user's profile image to the blog
    });
    await user.save();

    // Add the blog to the global Blogs collection
    await Blogs.create({
      username,
      email,
      title,
      desc,
      imageUrl,
      profileImageUrl, // Add the user's profile image to the global blog entry
    });

    const blogs = await Blogs.find();
    res.status(200).send({ user, blogs });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = route;
