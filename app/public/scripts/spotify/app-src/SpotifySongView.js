var SpotifySongView = Backbone.View.extend({
    tagName: 'li',
    model: null,
    template: _.template($('.spotify-song-view').html()),

    initialize: function() {
        this.render();
        return this;
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

module.exports = SpotifySongView;
