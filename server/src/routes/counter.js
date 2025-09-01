'use strict';

var express = require('express');
var router = express.Router();
var counterController = require('../controllers/counter.controller');

// Counter collection routes
router.get('/', counterController.read);

// Counter increment route
router.post('/increment', counterController.increment);

module.exports = router;
