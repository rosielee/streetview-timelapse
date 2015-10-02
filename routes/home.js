'use strict';

var express = require('express');
var router  = express.Router();
var data    = {};

// GET /
router.get('/', function(req, res, next) {

    data.origin      = (req.query.origin)      ? req.query.origin      : 'BA133AU'; // default for testing
    data.destination = (req.query.destination) ? req.query.destination : 'BA111PT'; // default for testing
    res.render('home', data);

});

module.exports = router;