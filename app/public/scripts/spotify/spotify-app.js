(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

new AppView();

module.exports = AppView;

},{"./SpotifySongView.js":3}],2:[function(require,module,exports){
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
    el: 'div',
    events: {
    },
    initialize: function() {
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

    Spotify.songsCollection = new SpotifySongsCollection();
    Spotify.appView = new AppView({ collection: Spotify.songsCollection });
})();

},{"./AppView.js":1,"./SpotifySongsCollection.js":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvcHVibGljL3NjcmlwdHMvc3BvdGlmeS9hcHAtc3JjL0FwcFZpZXcuanMiLCJhcHAvcHVibGljL3NjcmlwdHMvc3BvdGlmeS9hcHAtc3JjL1Nwb3RpZnlTb25nLmpzIiwiYXBwL3B1YmxpYy9zY3JpcHRzL3Nwb3RpZnkvYXBwLXNyYy9TcG90aWZ5U29uZ1ZpZXcuanMiLCJhcHAvcHVibGljL3NjcmlwdHMvc3BvdGlmeS9hcHAtc3JjL1Nwb3RpZnlTb25nc0NvbGxlY3Rpb24uanMiLCJhcHAvcHVibGljL3NjcmlwdHMvc3BvdGlmeS9hcHAtc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBTcG90aWZ5U29uZ1ZpZXcgPSByZXF1aXJlKCcuL1Nwb3RpZnlTb25nVmlldy5qcycpO1xuXG52YXIgQXBwVmlldyA9IEJhY2tib25lLlZpZXcuZXh0ZW5kKHtcbiAgICBjb2xsZWN0aW9uOiAkKCcjc29uZ3MnKSxcbiAgICBlbDogJCgnLnNwb3RpZnktc29uZ3MtdmlldycpLFxuICAgIGV2ZW50czoge1xuICAgIH0sXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJGxpc3QgPSB0aGlzLiRlbC5maW5kKCd1bCcpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuJGxpc3QuYXBwZW5kKF8udGVtcGxhdGUoJzxsaT5oaTwvbGk+JykodGhpcy5jb2xsZWN0aW9uW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuJGxpc3QpO1xuICAgIH1cbn0pO1xuXG5uZXcgQXBwVmlldygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFZpZXc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBTcG90aWZ5U29uZyA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG4gICAgZGVmYXVsdHM6IHtcbiAgICAgICAgbmFtZTogJ1NvbmcnLFxuICAgICAgICB1cmw6ICcnXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BvdGlmeVNvbmc7XG4iLCJ2YXIgU3BvdGlmeVNvbmdWaWV3ID0gQmFja2JvbmUuVmlldy5leHRlbmQoe1xuICAgIGVsOiAnZGl2JyxcbiAgICBldmVudHM6IHtcbiAgICB9LFxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwb3RpZnlTb25nVmlldztcbiIsInZhciBTcG90aWZ5U29uZyA9IHJlcXVpcmUoJy4vU3BvdGlmeVNvbmcuanMnKTtcblxuLy8gY3JlYXRlIGEgRmlyZWJhc2UgY29sbGVjdGlvbiBhbmQgc2V0IHRoZSAndXJsJyBwcm9wZXJ0eSB0byB0aGUgVVJMIG9mIG91ciBGaXJlYmFzZSBhcHBcbm1vZHVsZS5leHBvcnRzID0gQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuICAgICAgICBtb2RlbDogU3BvdGlmeVNvbmcsXG4gICAgICAgIGF1dG9TeW5jOiBmYWxzZVxuICAgIH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3BvdGlmeVNvbmdzQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4vU3BvdGlmeVNvbmdzQ29sbGVjdGlvbi5qcycpO1xudmFyIEFwcFZpZXcgPSByZXF1aXJlKCcuL0FwcFZpZXcuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIFNwb3RpZnkgPSB7fTtcblxuICAgIFNwb3RpZnkuc29uZ3NDb2xsZWN0aW9uID0gbmV3IFNwb3RpZnlTb25nc0NvbGxlY3Rpb24oKTtcbiAgICBTcG90aWZ5LmFwcFZpZXcgPSBuZXcgQXBwVmlldyh7IGNvbGxlY3Rpb246IFNwb3RpZnkuc29uZ3NDb2xsZWN0aW9uIH0pO1xufSkoKTtcbiJdfQ==
