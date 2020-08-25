// app.js

var express = require("express");
var bodyParser = require("body-parser");

var food = require("./routes/food"); // Imports routes for the food
require("dotenv").config();
var app = express();

// Set up mongoose connection
var mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL || `mongodb://localhost/${DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
    if (process.send) {
      process.send("ready");
    }
  })
  .catch((e) => {
    console.error("An error occured while trying to connect with the database");
    process.exit(0);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/", food);

var port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to recipe api",
  });
});
