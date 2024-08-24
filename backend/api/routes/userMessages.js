const express = require("express");
const router = express.Router();
const Usermessage = require("../../models/userMessages");

router.post("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { name, email, subject, message } = req.body;
    const userMess = await Usermessage.create({ 
        name, email, subject, message
     });

     res.status(201).send(userMess);

  } catch (err) {
    console.log("Error storing user feedback:", err);
    res.status(400).json({
      status: "error",
      error: err.message || "Can't store message",
    });
  }
});

module.exports = router;
