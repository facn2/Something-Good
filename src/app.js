const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');
const app = express();
require('env2')('./config.env');

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

app.set('port', process.env.PORT);

app.use(controllers);

module.exports = app;
