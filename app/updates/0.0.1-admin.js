'use strict';

var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function(done) {
    new User.model({
        name: { first: 'Tara', last: 'Marchand' },
        email: 'tara@mac.com',
        password: 'changeme',
        canAccessKeystone: true
    }).save(done);
};
