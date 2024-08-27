const express = require("express");
const router = express.Router();
const Users = require("../../models/users");

router.get("/", async (req, res) => {
  try {
    const { userName, userEmail } = req.query;
    const user = await Users.findOne({ username: userName, email: userEmail });

    if (user) {
      console.log("User data:", {
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        profileImageUrl: user.profileImageUrl,
        email: user.email,
        totalPostsLength: user.blogs.length,
        allBlogPosts: user.blogs,
      });

      res.send({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        profileImageUrl: user.profileImageUrl,
        email: user.email,
        totalPostsLength: user.blogs.length,
        allBlogPosts: user.blogs,
      });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    console.error("Error fetching user data:", err);
    res.status(500).send({ message: "Server error", error: err.message });
  }
});


module.exports = router;

