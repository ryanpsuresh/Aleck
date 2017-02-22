const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const parseURL = require('./parseURL.js');

const port = process.env.PORT || 3468;

app.use(express.static(__dirname + '/../app'));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  const text = req.body.text.toLowerCase().split(' ');
  const url = parseURL.parseURL(text);

  axios.get(url)
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(response) {
      console.log('GET request from ' + url + ' unsuccessful.' + response);
    });
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});