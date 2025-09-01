'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Counter = mongoose.model('Counter');

/**
 * Simple error handler
 */
function getErrorMessage(err) {
  var message = '';

  if (err.code) {
    switch (err.code) {
    case 11000:
    case 11001:
      message = 'Duplicate field error';
      break;
    default:
      message = 'Something went wrong';
    }
  } else if (err.message) {
    message = err.message;
  } else {
    message = 'Unknown error occurred';
  }

  return message;
}

/**
 * Show the current counter
 */
exports.read = async function(req, res) {
  console.log('Read function called');

  try {
    let counter = await Counter.findOne();
    console.log('Found counter:', counter);
    
    if (!counter) {
      console.log('No counter found, creating new one');
      counter = new Counter({ count: 0 });
      await counter.save();
      console.log('New counter created, sending response:', counter.count);
    } else {
      console.log('Sending existing counter:', counter.count);
    }
    
    res.json({ count: counter.count });
  } catch (err) {
    console.error('Error reading counter:', err);
    return res.status(400).send({
      message: getErrorMessage(err)
    });
  }
};

/**
 * Increment counter without transaction (for standalone MongoDB)
 */
exports.increment = async function(req, res) {
  console.log('Increment function called');

  try {
    const counter = await Counter.findOneAndUpdate(
      {}, // Find any counter document
      { $inc: { count: 1 }, $set: { updated: new Date() } }, // Increment count and update timestamp
      {
        new: true, // Return the updated document
        upsert: true, // Create if doesn't exist
        setDefaultsOnInsert: true // Set defaults when creating
      }
    );

    console.log('Increment completed, sending response:', counter.count);
    res.json({ count: counter.count });
  } catch (err) {
    console.error('Error in increment function:', err);
    return res.status(400).send({
      message: getErrorMessage(err)
    });
  }
};
