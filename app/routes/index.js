'use strict';

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// common middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// handle 404 errors
keystone.set('404', function(req, res, next) {
    res.notfound();
});

// handle other errors
keystone.set('500', function(err, req, res, next) {
    var title;
    var message;

    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});
console.log(process);

// load routes
var routes = {
    views: importRoutes('./views')
};

// bind routes
exports = module.exports = function(app) {
    app.get('/', routes.views.index);
    app.get('/photos', routes.views.photos);
    app.get('/spotify', routes.views.spotify);
    app.get('/:page', function(req, res) {
        if (req.url === '/favicon.ico') {
            res.writeHead(200, { 'Content-Type': 'image/x-icon' } );
            res.end();
            console.log('favicon requested');
            return;
        }
        var view = new keystone.View(req, res);
        view.render(req.params.page);
    });
};
