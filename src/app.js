const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Something Good is happening here');
});

app.listen(7000, () => {
  console.log('Magic happens on port 7000!');
});
