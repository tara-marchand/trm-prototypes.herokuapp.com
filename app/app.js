'use strict';

var path = require('path');
var express = require('express');
var app = express();
var expose = require('express-expose');
var exphbs = require('express-handlebars');
var expressConfig = require('./config/express.js');
var secrets = require('./config/secrets.js');
var keystone = require('keystone');
var mongoose = require('mongoose');

app = expose(app);
// /* expose config to client side */
app.expose({
    socrataAppToken: secrets.socrataAppToken
}, 'env', 'environment');

keystone.set('app', app);
keystone.set('mongoose', mongoose);

keystone.init({
  'name': 'TRM Prototypes',

  'static': ['public', '../node_modules'],

  'views': 'templates/views',
  'view engine': 'hbs',
  'custom engine': exphbs.create({
      defaultLayout: 'main',
      extname: '.hbs',
      layoutsDir: path.join(__dirname, 'templates/layouts'),
      partialsDir: path.join(__dirname, 'templates/views/partials')
  }).engine,

  'auto update': true,

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '9GHb7PD1Pkme5wveqnlW'
});

keystone.set('mongo', (function() {
    if (keystone.get('env') === 'production') {
        return secrets.mongoUri;
    } else if (keystone.get('env') === 'development') {
        return 'mongodb://localhost/tmarchand-labs';
    }
})());


require('./models');

keystone.set('routes', require('./routes'));

keystone.start();

// http://stackoverflow.com/questions/22278014/how-to-use-html-file-extensions-for-handlebars-in-express
// app.use('/', express.static(path.join(__dirname, '/public')));
// app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
//
// app.set('views', path.join(__dirname, '/views'));
//
// app.engine('hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs',
//     layoutsDir: path.join(__dirname, 'views/layouts')
// }));
//
// app.set('view engine', 'hbs');
//
// require('./routes')(app);
//
// app.listen(expressConfig.port, function(error) {
//     if (error) {
//         winston.error('Unable to listen for connections', error);
//         process.exit(10);
//     }
//     winston.info('Express is listening on http://' + expressConfig.ip + ':' + expressConfig.port);
// });
//
// module.exports = app;
