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
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  })
    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

// Route for logging user out
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
app.get("/api/user_data", function(req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  }
  else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});

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
    app.get("/owl/teams", function (req, res) {

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