const eventModel = require('eventModel.js');
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
eventModel.create(cleaning, err => {
  if (err) console.log(err);
  console.log('saved');
});
