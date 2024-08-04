const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const registerUser = require("./routes/registerUser");
const loginUser = require("./routes/loginUser");
const mainPage = require("./routes/mainPage");
const allUser = require("./routes/allUser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

mongoose
  .connect(
    process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/nitaiInnovationsDB"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/registerUser", registerUser);
app.use("/loginUser", loginUser);

app.use("/", mainPage);
app.use("/allUser", allUser);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
