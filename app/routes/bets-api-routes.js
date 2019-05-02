var db = require("../models");

module.exports = function (bets) {
    // GET route for getting all of the todos
    app.get("/api/showbets", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Bid.findAll({}).then(function (dbBid) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbBid);
        });
    });

    app.post("/api/showbets", function (req,res) {
        db.Bid.create({
            username: req.body.username,
            betType: req.body.betType,
            betAmount: req.body.betAmount
        }).then(function(dbBid) {
            res.json(dbBid)
        }).catch(function(err) {
            res.json(err);
        })
    })
}