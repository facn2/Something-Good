const eventModel = require('./../../database/eventModel.js');

exports.get = (req, res) => {
  eventModel.find();
  res.render('eventModel', { eventModel });
};
