var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
    app.get("/allbets", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/allbets.html"));
    });
    app.get("/csgo", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/csgo.html"));
    });
    app.get("/dotter", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/doter.html"));
    });
    app.get("/lol", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/lol.html"));
    });
    app.get("/owl", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/owl.html"));
    });
    app.get("/site-news", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/site-news.html"));
    });
    app.get("/teams", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/teams.html"));
    });
    app.get("/watchnow", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/watchnow.html"));
    });
    app.get("/example", function(req, res) {
        res.render("example");
    });
    

};

//ignore