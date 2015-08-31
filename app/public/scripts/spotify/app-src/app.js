'use strict';

var SpotifySongsCollection = require('./SpotifySongsCollection.js');
var AppView = require('./AppView.js');

module.exports = (function() {
    var Spotify = {};

    Spotify.songsCollection = new SpotifySongsCollection(JSON.parse($('#songs').text()));
    Spotify.appView = new AppView({ collection: Spotify.songsCollection });
})();
