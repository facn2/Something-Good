const events = require('./../../database/eventModel.js');

module.exports = (req, res) => {
  events.find({}, (err, results) => {
    if (err) {
      console.log('Error with finding data ', err);
    } else {
      console.log('found the data! ', events);
      res.render('events', { events });
    }
  });
};
