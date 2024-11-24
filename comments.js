// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

// Use body parser to get data from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up port
app.set('port', (process.env.PORT || 5000));

// Use static files
app.use(express.static(path.join(__dirname, 'public')));