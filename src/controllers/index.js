const express = require('express');
const router = express.Router();

const home = require('./');
const events = require('./events');
const event = require('./event');
const create = require('./create');
const thanks = require('./thanks');
// const error = require('./error');

router.get('/', (req, res) => {
  res.render('home', home);
});

router.get('/events', (req, res) => {
  res.render('events', events);
});

router.get('/event', (req, res) => {
  res.render('event', event);
});

router.get('/create', (req, res) => {
  res.render('create', create);
});

router.get('/thanks', (req, res) => {
  res.render('thanks', thanks);
});

// router.use(error.client);
// router.use(error.server);

module.exports = router;
