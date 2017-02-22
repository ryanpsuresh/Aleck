const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const axios = require('axios');

const port = process.env.PORT || 3468;

app.use(express.static(__dirname + '/../app'));
app.use(bodyParser.json());

