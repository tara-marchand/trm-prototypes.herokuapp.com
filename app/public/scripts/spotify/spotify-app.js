(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./SpotifySongView":3}],2:[function(require,module,exports){
'use strict';

var SpotifySong = Backbone.Model.extend({
    defaults: {
        name: 'Song',
        url: ''
    }
});

module.exports = SpotifySong;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
var SpotifySong = require('./SpotifySong.js');

// create a Firebase collection and set the 'url' property to the URL of our Firebase app
module.exports = Backbone.Collection.extend({
        model: SpotifySong,
        autoSync: false
    });

},{"./SpotifySong.js":2}],5:[function(require,module,exports){
'use strict';

var SpotifySongsCollection = require('./SpotifySongsCollection.js');
var AppView = require('./AppView.js');

module.exports = (function() {
    var Spotify = {};

    Spotify.songsCollection = new SpotifySongsCollection(JSON.parse($('#songs').text()));
    Spotify.appView = new AppView({ collection: Spotify.songsCollection });
})();

},{"./AppView.js":1,"./SpotifySongsCollection.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvcHVibGljL3NjcmlwdHMvc3BvdGlmeS9hcHAtc3JjL0FwcFZpZXcuanMiLCJhcHAvcHVibGljL3NjcmlwdHMvc3BvdGlmeS9hcHAtc3JjL1Nwb3RpZnlTb25nLmpzIiwiYXBwL3B1YmxpYy9zY3JpcHRzL3Nwb3RpZnkvYXBwLXNyYy9TcG90aWZ5U29uZ1ZpZXcuanMiLCJhcHAvcHVibGljL3NjcmlwdHMvc3BvdGlmeS9hcHAtc3JjL1Nwb3RpZnlTb25nc0NvbGxlY3Rpb24uanMiLCJhcHAvcHVibGljL3NjcmlwdHMvc3BvdGlmeS9hcHAtc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbHMgXywgQmFja2JvbmUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3BvdGlmeVNvbmdWaWV3ID0gcmVxdWlyZSgnLi9TcG90aWZ5U29uZ1ZpZXcnKTtcblxudmFyIEFwcFZpZXcgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgY29sbGVjdGlvbjogbnVsbCxcbiAgICBlbDogJCgnLnNwb3RpZnktc29uZ3MtdmlldycpLFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJGxpc3QgPSB0aGlzLiRlbC5maW5kKCd1bCcpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kbGlzdC5odG1sKCcnKTtcbiAgICAgICAgXy5lYWNoKHRoaXMuY29sbGVjdGlvbi5tb2RlbHMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuJGxpc3QuYXBwZW5kKG5ldyBTcG90aWZ5U29uZ1ZpZXcoeyBtb2RlbDogaXRlbSB9KS5yZW5kZXIoKS4kZWwpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbGlzdCk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwVmlldztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFNwb3RpZnlTb25nID0gQmFja2JvbmUuTW9kZWwuZXh0ZW5kKHtcbiAgICBkZWZhdWx0czoge1xuICAgICAgICBuYW1lOiAnU29uZycsXG4gICAgICAgIHVybDogJydcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcG90aWZ5U29uZztcbiIsInZhciBTcG90aWZ5U29uZ1ZpZXcgPSBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG4gICAgdGFnTmFtZTogJ2xpJyxcbiAgICBtb2RlbDogbnVsbCxcbiAgICB0ZW1wbGF0ZTogXy50ZW1wbGF0ZSgkKCcuc3BvdGlmeS1zb25nLXZpZXcnKS5odG1sKCkpLFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKHRoaXMubW9kZWwudG9KU09OKCkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BvdGlmeVNvbmdWaWV3O1xuIiwidmFyIFNwb3RpZnlTb25nID0gcmVxdWlyZSgnLi9TcG90aWZ5U29uZy5qcycpO1xuXG4vLyBjcmVhdGUgYSBGaXJlYmFzZSBjb2xsZWN0aW9uIGFuZCBzZXQgdGhlICd1cmwnIHByb3BlcnR5IHRvIHRoZSBVUkwgb2Ygb3VyIEZpcmViYXNlIGFwcFxubW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG4gICAgICAgIG1vZGVsOiBTcG90aWZ5U29uZyxcbiAgICAgICAgYXV0b1N5bmM6IGZhbHNlXG4gICAgfSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBTcG90aWZ5U29uZ3NDb2xsZWN0aW9uID0gcmVxdWlyZSgnLi9TcG90aWZ5U29uZ3NDb2xsZWN0aW9uLmpzJyk7XG52YXIgQXBwVmlldyA9IHJlcXVpcmUoJy4vQXBwVmlldy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgU3BvdGlmeSA9IHt9O1xuXG4gICAgU3BvdGlmeS5zb25nc0NvbGxlY3Rpb24gPSBuZXcgU3BvdGlmeVNvbmdzQ29sbGVjdGlvbihKU09OLnBhcnNlKCQoJyNzb25ncycpLnRleHQoKSkpO1xuICAgIFNwb3RpZnkuYXBwVmlldyA9IG5ldyBBcHBWaWV3KHsgY29sbGVjdGlvbjogU3BvdGlmeS5zb25nc0NvbGxlY3Rpb24gfSk7XG59KSgpO1xuIl19
