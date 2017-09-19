const events = require('./../../database/eventModel.js');

module.exports = (req, res) => {
  events.find({}, (err, result) => {
    if (err) {
      console.log('Error with finding data ', err);
    } else {
      res.render('events', { events: result });
    }
  });
};
