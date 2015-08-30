var SpotifySong = require('./SpotifySong.js');

// create a Firebase collection and set the 'url' property to the URL of our Firebase app
module.exports = Backbone.Collection.extend({
        model: SpotifySong,
        autoSync: false
    });
