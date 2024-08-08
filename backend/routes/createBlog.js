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
    // Adding blog to user blogs collection
    const user = await User.findOneAndUpdate(
      { username },
      { $push: { blogs: { title, desc, imageUrl } } },
      { new: true, runValidators: true }
    );

    if (!user) {
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
    res.status(200).send({ user, blogs });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = route;
