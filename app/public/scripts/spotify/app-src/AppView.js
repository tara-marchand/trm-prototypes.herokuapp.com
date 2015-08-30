'use strict';

var SpotifySongView = require('./SpotifySongView.js');

var AppView = Backbone.View.extend({
    collection: $('#songs'),
    el: $('.spotify-songs-view'),
    events: {
    },
    initialize: function() {
        this.$list = this.$el.find('ul');
    },
    render: function() {
        for (var i = 0; i < this.collection.length; i++) {
            this.$list.append(_.template('<li>hi</li>')(this.collection[i]));
        }
        this.$el.append(this.$list);
    }
});

module.exports = AppView;
