import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['col-sm-12', 'col-md-6', 'col-lg-6'],
    actions: {
        searchText: function () {
            var fieldName = this.get('newField');
            alert(fieldName);
            this.sendAction('searchT',fieldName);
        }
    }

});
