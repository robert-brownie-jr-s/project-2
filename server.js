require("dotenv").config();
var express = require("express");
var session = require("express-session");
var exphbs = require("express-handlebars");
var path = require("path");
// Requiring passport as we've configured it
var passport = require("./config/passport");
// research on bcrypt <- creating unique code for ids

//port setup and models
var PORT = process.env.PORT || 3000;
//old
// var db = require("./app/models");
var db = require("./models");

var app = express();
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("app/public"));

//Example's code
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, '/app/views/layouts')
  })
);
app.set("view engine", "handlebars");
// app.set('view engine', path.join(__dirname, '/app/views/layouts'));


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
