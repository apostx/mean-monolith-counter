'use strict';

var express = require('express');
var path = require('path');

// Import models
require('./models/counter.model');

var app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes (must come before static files)
app.use('/api/counter', require('./routes/counter'));

// Serve static files (Angular build output)
app.use(express.static(path.join(__dirname, '../public')));

// SPA fallback: serve index.html for all non-API routes
// Using middleware approach that's Express 5.x compatible
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
