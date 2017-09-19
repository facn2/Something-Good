const eventModel = require('./../../database/eventModel.js');

exports.get = (req, res) => {
  eventModel.find({}, (err, results) => {
    if (err) {
      console.log('Error with finding data ', err);
    } else {
      res.render('eventModel', { eventModel });
    }
  });
};
