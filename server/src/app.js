const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const cookieSession = require("cookie-session");

require("./auth/passportGoogleSSO");

require("./models/user");

const api = require("./api");
const passport = require("passport");

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://cloudmongodbadlibioqatool:cloudmongodbadlibioqatool@cluster0.xoiimct.mongodb.net/?retryWrites=true&w=majority"
);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./auth/passportLocal")(passport);

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

module.exports = app;
