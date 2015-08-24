'use strict';

var path = require('path');
var express = require('express');
var app = express();
var winston = app.winston = require('winston');
var config = require('./config');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/', express.static(path.join(__dirname, '/public')));
winston.info(path.join(__dirname, '..', 'node_modules'));
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
