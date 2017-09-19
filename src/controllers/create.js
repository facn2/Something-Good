// const events = require('./../../database/eventModel.js');
//
// module.exports = (req, res) => {
//   events.save({}, (err, result) => {
//     if (err) {
//       console.log('Error with inserting event ', err);
//     } else {
//       res.render('create', { create: create });
//     }
//   });
// };

exports.get = (req, res) => {
  const { create } = req.params;
  return create.js;
};
