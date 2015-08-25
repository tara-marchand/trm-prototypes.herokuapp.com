'use strict';

var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var winston = app.winston = require('winston');
var config = require('./config');
var handlebars = null;

app.set('views', path.join(__dirname, 'views'));
// http://stackoverflow.com/questions/22278014/how-to-use-html-file-extensions-for-handlebars-in-express
handlebars = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
});
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

require('./routes')(app);

app.listen(config.express.port, config.express.ip, function(error) {
    if (error) {
        winston.error('Unable to listen for connections', error);
        process.exit(10);
    }
    winston.info('Express is listening on http://' + config.express.ip + ':' + config.express.port);
});

module.exports = app;
