'use strict';

var Contractor = require('./Contractor.js');

// create a Firebase collection and set the 'url' property to the URL of our Firebase app
module.exports = Backbone.Firebase.Collection.extend({
    url: process.env.CONTRACTORS_FIREBASE_URL,
    model: Contractor,
    autoSync: false
});
