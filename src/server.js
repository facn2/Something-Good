const app = require('./app.js');

app.listen(app.get('port'), () => {
  console.log('Magic happens on port 5000!');
});
