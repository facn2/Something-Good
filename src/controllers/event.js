const events = require('./../../database/db_connection.js');

exports.get = (req, res, next) => {
  const { event } = req.params;
  if (events.includes(event)) {
    return res.render('event', { event });
  }
  next();
};
