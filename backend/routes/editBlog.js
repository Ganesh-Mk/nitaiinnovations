const express = require("express");
const route = express.Router();
const Users = require("../models/users");
const Blogs = require("../models/blogs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

route.patch("/", upload.single("image"), async (req, res) => {
  try {
    const { username, email, changetitle, currentTitle, changedesc } = req.body;
    const uploadedImage = req.file; // multer processes the file and attaches it to req.file

    console.log("Req Body: ", req.body);
    console.log("Req File: ", uploadedImage);

    // Changing in user blogs
    const user = await Users.findOne({ username, email });

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    const blog = user.blogs.find((blog) => blog.title === currentTitle);
    if (!blog) {
      return res
        .status(404)
        .json({ status: "error", message: "Blog not found" });
    }

    if (changetitle) blog.title = changetitle;
    if (changedesc) blog.desc = changedesc;
    if (uploadedImage) blog.imageUrl = uploadedImage.path; // Save the filename to database
    await user.save();

    // Changing in all blogs
    const allBlogs = await Blogs.findOne({ title: currentTitle, email });
    if (!allBlogs) {
      return res
        .status(404)
        .json({ status: "error", message: "Blog not found in all blogs" });
    }

    if (changetitle) allBlogs.title = changetitle;
    if (changedesc) allBlogs.desc = changedesc;
    if (uploadedImage) allBlogs.imageUrl = uploadedImage.path; // Save the filename to database
    await allBlogs.save();

    res.send({ status: "ok", message: "Blog updated successfully" });
  } catch (err) {
    res.status(500).send({ status: "error", message: "Server error: " + err });
  }
});

module.exports = route;
