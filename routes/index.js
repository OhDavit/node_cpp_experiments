"use strict";

const express = require('express');
const router = express.Router();
const addon = require('../build/Release/addon');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: addon.hello() });
});

module.exports = router;
