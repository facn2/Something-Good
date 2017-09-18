const app = require('./app.js');
require('env2')('./config.env');

app.listen(app.get('port'), () => {
  console.log('Magic happens on port 5000!');
});
