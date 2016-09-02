import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        searchT: function (fieldName) {
            alert(fieldName);
            this.sendAction('searchT',fieldName);
        }
    }
});
