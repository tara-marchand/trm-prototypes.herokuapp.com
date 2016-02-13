"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        'use strict';

        var ContractorView = require('./ContractorView.js');

        var AppView = Backbone.View.extend({
            el: $('.contractors-view'),
            events: {
                'click .add-contractor': 'createContractor'
            },
            initialize: function initialize() {
                this.$list = this.$el.find('ul');
                this.$input = this.$el.find('.new-contractor');
                // by listening to when the collection changes, we can add new items in real time
                this.listenTo(this.collection, 'add', this.addContractor);
                this.listenTo(Backbone, 'loader', this.loaderToggle);
                this.fetchContractors();
            },
            fetchContractors: function fetchContractors() {
                this.loaderShow();
                this.collection.fetch({ success: _.bind(this.loaderHide, this) });
            },
            syncContractors: function syncContractors() {
                this.loaderShow();
                this.collection.sync({ success: _.bind(this.loaderHide, this) });
            },
            addContractor: function addContractor(contractor) {
                var view = new ContractorView({ model: contractor });
                this.$list.append(view.render().el);
                contractor.save();
            },
            loaderToggle: function loaderToggle(showOrHide) {
                if (showOrHide === 'show') {
                    this.$el.find('.spinner').removeClass('hidden');
                } else if (showOrHide === 'hide') {
                    this.$el.find('.spinner').addClass('hidden');
                }
            },
            loaderShow: function loaderShow() {
                this.loaderToggle('show');
            },
            loaderHide: function loaderHide() {
                this.loaderToggle('hide');
            },
            createContractor: function createContractor() {
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
    }, { "./ContractorView.js": 4 }], 2: [function (require, module, exports) {
        'use strict';

        var Contractor = Backbone.Model.extend({
            defaults: {
                name: 'New Contractor',
                url: ''
            }
        });

        module.exports = Contractor;
    }, {}], 3: [function (require, module, exports) {
        'use strict';

        var Contractor = require('./Contractor.js');

        // create a Firebase collection and set the 'url' property to the URL of our Firebase app
        module.exports = Backbone.Firebase.Collection.extend({
            url: "https://tmarchand-contractors.firebaseio.com/contractors",
            model: Contractor,
            autoSync: false
        });
    }, { "./Contractor.js": 2 }], 4: [function (require, module, exports) {
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

            initialize: function initialize() {
                var _this = this;

                this.listenTo(this.model, 'change', this.render);
                // this.model.bind('remove', this.remove, this);
                this.model.bind('remove', function () {
                    return _this.remove();
                });
            },

            render: function render() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            },

            toggleEdit: function toggleEdit(e) {
                e.preventDefault();
                this.isBeingEdited = !this.isBeingEdited;
                this.$el.find('.edit-fields').toggleClass('hidden', !this.isBeingEdited);
            },

            delete: function _delete() {
                this.model.destroy();
                this.$el.remove();
            },

            cancel: function cancel() {
                this.$el.find('.edit-fields').addClass('hidden');
            },

            showLoader: function showLoader() {
                Backbone.trigger('loader', 'show');
            },

            hideLoader: function hideLoader() {
                Backbone.trigger('loader', 'hide');
            },


            save: function save(e) {
                var _this2 = this;

                e.preventDefault();

                this.showLoader();

                var modelToSave = {};
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
                this.model.save(modelToSave, { success: function success() {
                        return _this2.hideLoader();
                    } });
            }
        });

        module.exports = ContractorView;
    }, { "./Contractor.js": 2 }], 5: [function (require, module, exports) {
        'use strict';

        var ContractorCollection = require('./ContractorCollection.js');
        var AppView = require('./AppView.js');

        module.exports = function () {
            var Contractors = {};

            Contractors.contractorCollection = new ContractorCollection();
            Contractors.appView = new AppView({ collection: Contractors.contractorCollection });
        }();
    }, { "./AppView.js": 1, "./ContractorCollection.js": 3 }] }, {}, [5]);
//# sourceMappingURL=contractors-app.js.map
