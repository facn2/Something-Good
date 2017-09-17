// const home = require('./../../database/db_connection.js');
//
// exports.get = (req, res) => {
//   res.render('home', home);
// };

exports.get = (req, res) => {
  const { home } = req.params;
  console.log(req.params);
  return home.js;
};
