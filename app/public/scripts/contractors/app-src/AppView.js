'use strict';

var ContractorView = require('./ContractorView.js');

var AppView = Backbone.View.extend({
    el: $('.contractors-view'),
    events: {
        'click .add-contractor': 'createContractor'
    },
    initialize: function() {
        this.$list = this.$el.find('ul');
        this.$input = this.$el.find('.new-contractor');
        // by listening to when the collection changes, we can add new items in real time
        this.listenTo(this.collection, 'add', this.addContractor);
        this.listenTo(Backbone, 'loader', this.loaderToggle);
        this.fetchContractors();
    },
    fetchContractors: function() {
        this.loaderShow();
        this.collection.fetch({ success: _.bind(this.loaderHide, this) });
    },
    syncContractors: function() {
        this.loaderShow();
        this.collection.sync({ success: _.bind(this.loaderHide, this) });
    },
    addContractor: function(contractor) {
        var view = new ContractorView({ model: contractor });
        this.$list.append(view.render().el);
        contractor.save();
    },
    loaderToggle: function(showOrHide) {
        if (showOrHide === 'show') {
            this.$el.find('.spinner').removeClass('hidden');
        } else if (showOrHide === 'hide'){
            this.$el.find('.spinner').addClass('hidden');
        }
    },
    loaderShow: function() {
        this.loaderToggle('show');
    },
    loaderHide: function() {
        this.loaderToggle('hide');
    },
    createContractor: function() {
        if (!this.$input.val()) {
            return;
        }
        // create a new location in Firebase and save the model data
        // this will trigger the listenTo method above, and a new contractor view will be created as well
        this.collection.create({ name: this.$input.val() });
        this.$input.val('');
    }
});

module.exports = AppView;
