const events = require('./../../database/eventModel.js');

module.exports = (req, res) => {
  events.findById(req.params.id, (err, result) => {
    console.log('result ', result);
    if (err) {
      console.log('Error with finding data ', err);
    } else {
      res.render('event', { event: result });
    }
  });
};
