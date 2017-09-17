// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:5000/Something-Good';

mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});
// MongoClient.connect(mongoDB, function (err, db) {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');
//   db.close();
// });

mongoose.connect(mongoDB);
console.log('Connected successfully to server');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Problem with mongoDB connection'));

const Schema = mongoose.Schema;
const eventSchema = new Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  image: String,
  participants: Number
});
var eventModel = mongoose.model('eventModel', eventSchema);

module.exports = eventModel;
