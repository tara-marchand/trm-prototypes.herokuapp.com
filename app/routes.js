'use strict';

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/:page', function(req, res) {
        res.render(req.params.page);
    });

};
