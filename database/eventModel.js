const mongoose = require('mongoose');
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
module.exports = Event;
