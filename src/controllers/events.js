const events = require('./../../database/db_connection.js');

exports.get = (req, res) => {
  res.render('events', events);
};
