// Dependencies
// const routes = require("app/routing/htmlRoutes.js");
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");
// Set up the express app
var app = express();
var PORT = process.env.PORT || 3000;
// Set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
//Starts server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  