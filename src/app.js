const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');
const app = express();

const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/something-good';
const db = mongoose.connection;

mongoose.connect(mongoDB);

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs',
exphbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
  defaultLayout: 'main',
  helpers: helpers
})
);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('port', process.env.PORT || 5000);

app.use(controllers);

module.exports = app;
