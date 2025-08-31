'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var app = require('./server/src/app');

// MongoDB connection
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/counter-app';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function(err) {
  if (err) {
    console.error('Could not connect to MongoDB!');
    console.log(err);
    process.exit(1);
  } else {
    console.log('Connected to MongoDB successfully');
  }
});

// Start the server
var port = process.env.PORT || 3000;
var host = process.env.HOST || 'localhost';

app.listen(port, function() {
  console.log('--');
  console.log('Counter App - Development Environment');
  console.log('');
  console.log('Environment:     development');
  console.log('Server:          http://' + host + ':' + port);
  console.log('Database:        ' + mongoUri);
  console.log('--');
});
