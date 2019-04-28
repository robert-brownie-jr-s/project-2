var db = require("../models");
const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();


module.exports = function (app) {
  app.get("/api/owlteam", function (req, res) {
    //get all owl events
    OWL.getWeeksMatches(req).then(response => {
      console.log(response.data);
      res.json(response)
    });
  });
  
 
}
