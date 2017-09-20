const eventModel = require('./eventModel.js');
const db = require('./../database/db_connection.js');

db.once('open', function () {
  console.log('connected to DB');
  eventModel.collection.drop();
  const cleaning = {
    title: 'Cleaning the Street',
    description: 'We will clean Bisharah street and remove the trash',
    location: 'Nazareth, Bisharah street',
    day: 'Thursday',
    date: '28/09/2017',
    time: '@ 10:00',
    image: '/images/clean.png',
    participants: '10'
  };

  console.log(cleaning);
  eventModel.create(cleaning, err => {
    if (err) console.log(err);
    console.log('saved');
  });

  const senior = {
    title: 'Visit the Senior Home',
    description: 'Visit the seniors and share stories with them',
    location: 'Nazareth, Paulus 6 street',
    day: 'Thursday',
    date: '5/10/2017',
    time: '@ 11:00',
    image: '/images/senior.png',
    participants: '14'
  };
  console.log(senior);
  eventModel.create(senior, err => {
    if (err) console.log(err);
    console.log('saved');
  });

  const party = {
    title: 'Party for Children',
    description: 'Play and have fun with children',
    location: 'Nazareth, Salam street',
    day: 'Tuesday',
    date: '19/09/2017',
    time: '@ 10:00',
    image: '/images/party.png',
    participants: '9'
  };

  console.log(party);
  eventModel.create(party, err => {
    if (err) console.log(err);
    console.log('saved');
  });

  const homework = {
    title: 'Homework with Students',
    description: 'We will help young students with their homework',
    location: 'Nazareth, Eastern Neighborhood',
    day: 'Monday',
    date: '25/09/2017',
    time: '@ 13:00',
    image: '/images/kids.png',
    participants: '5'
  };

  console.log(homework);
  eventModel.create(homework, err => {
    if (err) console.log(err);
    console.log('saved');
  });

  const gardening = {
    title: 'Community Garden',
    description: 'We will take care of the local gardens and plant flowers',
    location: 'Nazareth, Westren neighborhood',
    day: 'Thursday',
    date: '07/10/2017',
    time: '@ 15:00',
    image: '/images/garden.png',
    participants: '16'
  };

  console.log(gardening);
  eventModel.create(gardening, err => {
    if (err) console.log(err);
    console.log('saved');
  });

  const code = {
    title: 'Code for Kids',
    description: 'Teach young kids how to programm and make small projects',
    location: 'Nazareth, Belal street',
    day: 'Wednesday',
    date: '18/10/2017',
    time: '@ 10:00',
    image: '/images/code.png',
    participants: '20'
  };

  console.log(code);
  eventModel.create(code, err => {
    if (err) console.log(err);
    console.log('saved');
  });
});
