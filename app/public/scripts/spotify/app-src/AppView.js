/* globals _, Backbone */

'use strict';

var SpotifySongView = require('./SpotifySongView');

var AppView = Backbone.View.extend({
    collection: null,
    el: $('.spotify-songs-view'),

    initialize: function() {
        this.$list = this.$el.find('ul');
        this.render();
    },
    render: function() {
        this.$list.html('');
        _.each(this.collection.models, function(item) {
            this.$list.append(new SpotifySongView({ model: item }).render().$el);
        }.bind(this));
        this.$el.append(this.$list);
    }
});

module.exports = AppView;
