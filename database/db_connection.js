const mongoose = require('mongoose');
require('env2')('./config.env');

mongoose.connect(process.env.DB_URL, { useMongoClient: true });
const db = mongoose.connection;
const Schema = mongoose.Schema;
const eventSchema = new Schema({
  title: String,
  description: { type: String, required: true },
  location: { type: String, required: true, unique: true },
  day: {type: String, required: true, unique: true},
  date: { type: String, required: true },
  time: { type: String, required: true },
  image: { type: String, required: true },
  participants: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

var Event = mongoose.model('Event', eventSchema);

db.on('error', console.error.bind(console, 'Problem with mongoDB connection'));
db.once('open', function () {
  console.log('connected to DB');

  var cleaning = {
    title: 'cleaning the street',
    description: 'we will clean the bisharah street, and remove the trash',
    location: 'Nazareth, Bisharah street',
    day: 'Thursday',
    date: '28/09/2017',
    time: '11:00',
    image: 'image',
    participants: '10'
  };
  console.log(cleaning);

  Event.create(cleaning, err => {
    if (err) console.log(err);
    console.log('saved');
  });
});

module.exports = {
  Event,
  eventSchema
};
