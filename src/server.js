const app = require('./app.js');

// app.listen(app.get('port'), () => {
//   console.log('App running on port', app.get('port'));
// });
app.listen(5000, () => {
  console.log('Magic happens on port 5000!');
});
