'use strict';

var keystone = require('keystone');
var Types = keystone.Field.Types;
var Role = null;
var Choice = null;
var Person = null;

// mayor, sheriff, etc.
Role = new keystone.List('Role', {
    sortable: true
});

Role.add({
    Choices: {
        type: Types.Relationship,
        ref: 'Choice',
        many: true
    }
});

Role.register();

// mayor: 1st choice, mayor: 2nd choice, etc.
Choice = new keystone.List('Choice', {
    sortable: true
});

Choice.add({
    role: {
        type: Types.Relationship,
        ref: 'Role'
    },
    label: { type: Types.Text, required: true },
    instructions: { type: Types.Text, required: true }
});

Choice.register();

// mayor: 1st choice, mayor: 2nd choice, etc.
Person = new keystone.List('Person', {
    sortable: true
});

Person.add({
    name: { type: Types.Name, required: true },
    occupation: { type: Types.Text, required: true }
    // password: { type: Types.Password, initial: true },
    // canAccessKeystone: { type: Boolean, initial: true }
});

Person.register();
