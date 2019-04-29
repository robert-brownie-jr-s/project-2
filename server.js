require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
// research on bcrypt <- creating unique code for ids


var db = require("./app/models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, '/app/views')
  })
);
app.set("view engine", "handlebars");
// app.set('view engine', path.join(__dirname, '/app/views'));


// Routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
