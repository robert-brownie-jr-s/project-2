var db = require("../models");
const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();


module.exports = function (app) {
  //overwatch requests
  app.get("/owl/live", function (req, res) {
    //get all owl events
    OWL.getLiveMatch(req).then(response => {
      response = response.data

      console.log(response.data.liveMatch);
      console.log("************************************************************************************************************************************************************************************************")
      //recieving live match updates
      res.json(response.data);
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });

  app.get("/api/schedule", function (req, res) {
    //get all owl events
    OWL.getSchedule(req).then(response => {
      response = response.data

      console.log(response.data);
      res.json(response.data.stages)
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });

/*********************************/

//doter routes


}
