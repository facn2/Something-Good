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
var visiting = {
  title: 'visiting the senior home',
  description: 'we will go to visit the senior home and share stories and fun with the seniors',
  location: 'Nazareth, Paulus6 street',
  day: 'Thursday',
  date: '5/10/2017',
  time: '11:00',
  image: 'image',
  participants: '14'
};
console.log(visiting);
eventModel.create(visiting, err => {
  if (err) console.log(err);
  console.log('saved');
});
var party = {
  title: 'party for adopted children',
  description: 'we will make a party for adopted children',
  location: 'Nazareth, salam street',
  day: 'Tuesday',
  date: '19/09/2017',
  time: '10:00',
  image: 'image',
  participants: '9'
};
console.log(party);
eventModel.create(party, err => {
  if (err) console.log(err);
  console.log('saved');
});
var homework = {
  title: 'helping young students with thier homework',
  description: 'we will help young students with thier homework and understanding the lessons',
  location: 'Nazareth, eastern nieghberhood',
  day: 'monday',
  date: '25/09/2017',
  time: '13:00',
  image: 'image',
  participants: '5'
};
console.log(homework);
eventModel.create(homework, err => {
  if (err) console.log(err);
  console.log('saved');
});
var garding = {
  title: 'taking care of the garden',
  description: 'we will take care of the local gardens and plants flowers ',
  location: 'Nazareth, westren nieghberhood',
  day: 'Thursday',
  date: '07/10/2017',
  time: '15:00',
  image: 'image',
  participants: '16'
};
console.log(garding);
eventModel.create(garding, err => {
  if (err) console.log(err);
  console.log('saved');
});
var teaching = {
  title: 'teaching young kids programming',
  description: 'we will teach young kids how to programm and make small projects',
  location: 'Nazareth, belal street',
  day: 'wednesday',
  date: '18/10/2017',
  time: '10:00',
  image: 'image',
  participants: '20'
};
console.log(teaching);
eventModel.create(teaching, err => {
  if (err) console.log(err);
  console.log('saved');
});
