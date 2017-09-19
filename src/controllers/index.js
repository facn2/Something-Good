const express = require('express');
const router = express.Router();

const home = require('./');
const events = require('./events');
const event = require('./event');
const create = require('./create');
const thanks = require('./thanks');
const error = require('./error');
// const insert = require('./insert');

router.get('/', (req, res) => {
  res.render('home', home);
});

router.get('/events', events);

router.get('/event/:id', event);

router.get('/create', (req, res) => {
  res.render('create', create);
});

router.get('/thanks', (req, res) => {
  res.render('thanks', thanks);
});

router.get('/error', (req, res) => {
  res.render('error', error);
});

// router.get('/insert', insert);

// Handle 404
// router.use(function (err, req, res)  {
//   res.render('error');
// });
//
// // Handle 500
// router.use(function (err, req, res) {
//   res.render('error');
// });

router.use(error.client);
router.use(error.server);

module.exports = router;
