var mongoose = require('mongoose');
var mongoDB = mongoose.connect('mongodb://localhost');

// mongoose.connect(process.env.MONGODB_URI, {
//   useMongoClient: true
// });

mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Problem with mongoDB connection'));

var Schema = mongoose.Schema;
var eventSchema = new Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  image: String,
  participants: Number
});
var eventModel = mongoose.model('eventModel', eventSchema);

module.exports = eventModel;
