'use strict';

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index.hbs');
    });

    app.get('/:page', function(req, res) {
        res.render(req.params.page + '.hbs');
    });

};
