const app = require('./app.js');
const db = require('./../database/db_connection.js');
db.once('open', function () {
  console.log('connected to DB');
  app.listen(app.get('port'), () => {
    console.log('Magic happens on port 5000!');
  });
});
