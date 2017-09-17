const mongoose = require('mongoose');
const app = require('./app.js'); require('env2')('./config.env');

mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});

app.listen(app.get('port'), () => {
  console.log('Magic happens on port 5000!');
});
