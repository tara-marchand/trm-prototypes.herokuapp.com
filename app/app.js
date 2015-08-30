'use strict';

var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var winston = app.winston = require('winston');
var config = require('./config');

// http://stackoverflow.com/questions/22278014/how-to-use-html-file-extensions-for-handlebars-in-express
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

app.set('views', path.join(__dirname, '/views'));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', 'hbs');

require('./routes')(app);

app.listen(config.express.port, config.express.ip, function(error) {
    if (error) {
        winston.error('Unable to listen for connections', error);
        process.exit(10);
    }
    winston.info('Express is listening on http://' + config.express.ip + ':' + config.express.port);
});

module.exports = app;
