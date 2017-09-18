const events = require('./../../database/db_connection.js');

exports.get = (req, res) => {
  events.find();
  res.render('events', { events });
};
