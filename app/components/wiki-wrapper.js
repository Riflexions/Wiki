import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        searchT: function (fieldName) {

            this.sendAction('searchT',fieldName);
        }
    }
});
