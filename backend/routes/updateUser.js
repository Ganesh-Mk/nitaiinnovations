const express = require("express");
const route = express.Router();
const Users = require("../models/users");

route.patch("/", async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const { userName, userEmail, firstName, lastName, email } = req.body;
        const user = await Users.findOne({ username: userName, email: userEmail });

        if(user) {
            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            await user.save();
            res.send(user);
        } else {
            res.send({ status: "error", message: "User not found" });
        }
    }
    catch(err) {
        res.send({ status: "error", message: "Server error: " + err });
    }
})

module.exports = route