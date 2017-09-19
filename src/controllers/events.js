const events = require('./../../database/eventModel.js');

module.exports = (req, res) => {
  events.find({}, (err, result) => {
    if (err) {
      console.log('Error with finding data ', err);
    } else {
      console.log('found the data! ', result);
      res.render('events', { events: result });
    }
  });
};
