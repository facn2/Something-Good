const express = require('express');
const router = express.Router();

const home = require('./');
// const events = require('./events');
// const event = require('./event');
// const create = require('./create');
// const thanks = require('./thanks');
// const error = require('./error');

router.get('/', (req, res) => {
  res.render('home', home);
});

// router.get('/', home);
// router.get('/events', events);
// router.get('/event', event);
// router.post('/create', create);
// router.get('/thanks', thanks);

// router.use(error.client);
// router.use(error.server);

module.exports = router;
