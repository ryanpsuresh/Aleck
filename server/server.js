const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const parseURL = require('./parseUrl.js');

const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/../app'));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  const text = req.body.text.toLowerCase().split(' ');
  const url = parseURL.parseURL(text);

  res.send(url);
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});