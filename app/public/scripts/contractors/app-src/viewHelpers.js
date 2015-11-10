'use strict';

var viewHelpers = {
    getHiddenClass: function() {
        var hiddenClass = '';
        if (this.isBeingEdited === true) {
            hiddenClass = ' hidden';
        }
        return hiddenClass;
    }
};

module.exports = viewHelpers;
