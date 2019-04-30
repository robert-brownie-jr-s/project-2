var db = require("../models");
const OverwatchLeague = require('overwatchleague');
const OWL = new OverwatchLeague();


module.exports = function (app) {
  //overwatch requests
  /*THINGS NEEDED*/
  /*
  1.past/current/future matches
  2.team specific info
  3.player info
  4.player stats
  5.news
   */ 
  //
  app.get("/owl/", function (req, res) {
    //get all owl events
    OWL.getTeams().then(response => {
      // response = response.data

      console.log(response);
      console.log("************************************************************************************************************************************************************************************************")
      //recieving live match updates
      res.json(response.data);
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });
//gets all OWl teams
  app.get("/owl/teams", function (req, res) {
    
    OWL.getTeams().then(response => {
      // response = response.data

      console.log(response);
      console.log("************************************************************************************************************************************************************************************************")
      //recieving live match updates
      res.json(response.data);
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });
//gets schedule for OWL
  app.get("/owl/schedule", function (req, res) {
    //get all owl events
    OWL.getSchedule(req).then(response => {
      response = response.data

      // console.log(response);
      res.json(response)
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });

//gets player info
  app.get("/owl/team/players", function (req, res) {
    //get all owl events
    OWL.getPlayers(4523).then(response => {
      response = response.data

      console.log(response);
      // res.json(response)
      res.send("CHECK TERMINAL")
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });

  //gets individual player info
  app.get("/owl/team/players/stats", function (req, res) {
    //get all owl events
    OWL.getPlayerStats(5717).then(response => {
      response = response.data.data.player.accounts

      console.log(response);
      res.json(response)
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });


/*********************************/

//doter routes


//PandaScore
// ajax
// https://api.pandascore.co/some-url?token=YOUR_TOKEN

}