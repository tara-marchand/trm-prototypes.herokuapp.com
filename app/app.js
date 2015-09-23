'use strict';

var path = require('path');
var express = require('express');
var app = express();
var expose = require('express-expose');
app = expose(app);
var exphbs = require('express-handlebars');
var winston = app.winston = require('winston');
var expressConfig = require('./config/express.js');
var secrets = require('./config/secrets.js');

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
/* expose config to client side */
app.expose({
    socrataAppToken: secrets.socrataAppToken
}, 'env', 'environment');

require('./routes')(app);

app.listen(expressConfig.port, function(error) {
    if (error) {
        winston.error('Unable to listen for connections', error);
        process.exit(10);
    }
    winston.info('Express is listening on http://' + expressConfig.ip + ':' + expressConfig.port);
});

module.exports = app;
