'use strict';

var keystone = require('keystone');
var superagent = require('superagent');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);

    superagent.get('https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B&market=ES')
        .end(function(err, res2) {
            if (err && err.code === 'ECONNREFUSED') {
                console.error('Refused connection');
            }

            var songs = res2.res.body.tracks;

            view.render('spotify', {
                jsonifiedSongs: JSON.stringify(songs)
            });
        });
};
