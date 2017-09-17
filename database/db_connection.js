var mongoose = require('mongoose');
var mongoDB = 'mongodb://00/something-good';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoDB connection error:'));

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
