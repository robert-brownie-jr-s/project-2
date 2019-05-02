var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        // res.sendFile(path.join(__dirname, "../public/html/signup.html"));
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/html/login.html"));
        
    });
    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
    });
    app.get("/allbets", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/allbets.html"));
    });
    app.get("/csgo", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/csgo.html"));
    });
    app.get("/dotter", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/doter.html"));
    });
    app.get("/lol", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/lol.html"));
    });
    app.get("/owl", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/owl.html"));
    });
    app.get("/site-news", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/site-news.html"));
    });
    app.get("/teams", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/teams.html"));
    });
    app.get("/watchnow", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/watchnow.html"));
    });
    app.get("/owl/vods", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/owl-vods.html"));
    });
    app.get("/owl/matches", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/upcoming.html"));
    });
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/members.html"));
    });
    
};

