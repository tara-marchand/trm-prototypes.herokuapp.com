'use strict';

var Contractor = require('./Contractor.js');

var ContractorView = Backbone.View.extend({
    events: {
        'click a': 'toggleEdit',
        'click .delete': 'delete',
        'click .cancel': 'cancel',
        'click .save': 'save'
    },

    // id: 'contractor-' + Contractor.id,
    model: Contractor,
    tagName: 'li',
    template: _.template($('.contractor-view').html()),
    isBeingEdited: false,

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        // this.model.bind('remove', this.remove, this);
        this.model.bind('remove', () => this.remove());
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    toggleEdit: function(e) {
        e.preventDefault();
        this.isBeingEdited = !this.isBeingEdited;
        this.$el.find('.edit-fields').toggleClass('hidden', !this.isBeingEdited);
    },

    delete: function() {
        this.model.destroy();
        this.$el.remove();
    },

    cancel: function () {
        this.$el.find('.edit-fields').addClass('hidden');
    },

    showLoader: function() {
        Backbone.trigger('loader', 'show');
    },

    hideLoader() {
        Backbone.trigger('loader', 'hide');
    },

    save: function(e) {
        e.preventDefault();

        this.showLoader();

        var modelToSave ={};
        var names = ['name', 'url'];
        var $input = null;
        var key = '';
        var value = '';

        for (var i = names.length - 1; i >= 0; i--) {
            $input = this.$el.find('[name="' + names[i] + '"]');
            key = $input.attr('name');
            value = $input.val();
            modelToSave[key] = value;
        }

        this.model.set(modelToSave);
        this.model.save(modelToSave, { success: () => this.hideLoader() });
    }
});

module.exports = ContractorView;
