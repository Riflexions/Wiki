import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        searchT: function () {
            alert("hi");
            this.sendAction('searchT');
        }
    }
});
