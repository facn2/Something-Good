const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Something Good is happening here');
});

app.get('/events', (req, res) => {
  res.send('We have some amazing events to share with you!');
});

module.exports = app;
