'use strict';

var express = require('express');
var path = require('path');

// Import models
require('./models/counter.model');

var app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (Angular build output)
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api/counter', require('./routes/counter'));

// Catch all handler: send back Angular's index.html file for any non-API routes
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
