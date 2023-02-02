const express = require('express');
const github = require('../helpers/github.js');
const database = require('../database');

let app = express();

// app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// TODO - your code here!
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  github.getReposByUsername(req.body.username)
    .then((response) => {
      // console.log(response.data);
      response.data.forEach((repo) => {
        database.save(repo);
      })
    })
    .catch((error) => {
      console.log(error);
    });

  res.end();
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  // console.log(database.get('watchers_count', 25));
  database.get('watchers_count', 25).exec((err, repos) => {
    if (err) {
      console.log(err);
    } else {
      res.send(repos);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

