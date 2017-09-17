const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');
const app = express();

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
// app.get('/', (req, res) => {
//   res.render('home', home);
// });
//
// // app.get('/', (req, res) => {
// //   res.send('Something Good is happening here');
// // });
//
// app.get('/events', (req, res) => {
//   res.render('events', events);
// });

app.set('port', process.env.PORT || 5000);

app.use(controllers);

module.exports = app;
