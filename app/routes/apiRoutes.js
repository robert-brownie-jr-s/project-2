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

  //newz
  app.get("/owl/news", function (req, res) {

    OWL.getNews().then(news => {
      // news = news.data

      console.log(news);
      //recieving live match updates
      res.json(news.data);
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });

  //list of maps/types
  // app.get("/owl/maps", function (req, res) {

  //   OWL.getMaps().then(mapName => {
  //     // mapName = mapName.data[0].name.en_US
  //     // mapName = mapName.data[0].type
  //     // mapName = mapName.data[0].icon
  //     // mapName = mapName.data[0].thumbnail

  //     console.log("Here are the maps my dude");

  //     res.json(mapName.data[0].icon);
  //   }).catch(function (err) {
  //     console.log(err.message);
  //     res.sendStatus(500);
  //   });
  // });

  //gets all OWl teams
  app.get("/nothing", function (req, res) {

    OWL.getTeams().then(teams => {
      teams = teams.data

      console.log("team data");
      
      //recieving live match updates
      res.json(teams.competitors[0].competitor.name);
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });
  //gets schedule for OWL
  app.get("/owl/schedule", function (req, res) {

    OWL.getWeeksMatches().then(schedule => {
      schedule = schedule.data

      // console.log(schedule);
      res.json(schedule)
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });

  //gets player info
  app.get("/owl/team/players", function (req, res) {

    OWL.getPlayers(4523).then(players => {
      players = players.data

      console.log(players);
      // res.json(players)
      res.send("CHECK TERMINAL")
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });

  //gets individual player info
  app.get("/owl/team/players/stats", function (req, res) {
    OWL.getPlayerStats(5717).then(playerStats => {
      playerStats = playerStats.data.data.player

      // console.log(playerStats.accounts[0].value + "||" + playerStats.accounts[1].value);

      //social media
      res.json(playerStats.accounts[0].value +
        '||' + playerStats.accounts[1].value +
        '||' + playerStats.accounts[2].value +
        '||' + playerStats.accounts[3].value +
        '||' + playerStats.accounts[4].value)
    }).catch(function (err) {
      console.log(err.message);
      res.sendStatus(500);
    });
  });


  /*********************************/

  //dota routes


  //PandaScore
  // ajax
  // https://api.pandascore.co/some-url?token=YOUR_TOKEN



}