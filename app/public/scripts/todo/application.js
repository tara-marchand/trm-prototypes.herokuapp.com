window.Todos = Ember.Application.create();

Todos.ApplicationSerializer = DS.LSSerializer.extend();
Todos.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: "todos-emberjs"
});
