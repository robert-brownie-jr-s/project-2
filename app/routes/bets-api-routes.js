var db = require("../models");

module.exports = function (app) {
    // GET route for getting all of the todos
    app.get("/api/showbets", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Bid.findAll({}).then(result => res.json(result)) 
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
          });
    });

    app.post("/api/showbets", function (req,res) {
        db.Bid.create({
            username: req.body.username,
            team: req.body.team,
            betAmount: req.body.betAmount
        }).then(result => 
            res.json(dbBid)) 
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
              });
        })
    })
}