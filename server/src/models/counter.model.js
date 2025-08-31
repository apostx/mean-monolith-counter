'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Counter Schema
 */
var CounterSchema = new Schema({
  count: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Counter', CounterSchema);
