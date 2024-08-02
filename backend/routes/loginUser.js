const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router.post("/loginUser", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email, password });

    if (user) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        "#secretKey123"
      );

      return res.json({ status: "ok", user: token });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Invalid username or password" });
  }
});

module.exports = router;
