const mongoose = require('mongoose');
const mongoDB = 'mongodb://27017/something-good';
const db = mongoose.connection;
const router = require('router');
mongoose.connect(mongoDB);
console.log('Connected successfully to server');

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
router.get('/', function (req, res, next) {
  res.render('home');
});

router.get('/get-data', function (req, res, next) {
  eventModel.find()
      .then(function (doc) {
        res.render('home', {items: doc});
      });
});

router.post('/insert', function (req, res, next) {
  var item = {
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    image: req.body.image,
    participants: req.body.participants
  };


router.post('/update', function (req, res, next) {
  var id = req.body.id;

  eventModel.findById(id, function (err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.description = req.body.description;
    doc.location = req.body.location;
    doc.date = req.body.date;
    doc.image = req.body.image;
    doc.participants = req.body.participants;
    doc.save();
  })
  res.redirect('/');
});

router.post('/delete', function (req, res, next) {
  var id = req.body.id;
  eventModel.findByIdAndRemove(id).exec();
  res.redirect('/');
});

module.exports = eventModel;
