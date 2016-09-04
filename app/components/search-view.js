import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['col-sm-12'],
    actions: {
        searchText: function () {
            var fieldName = this.get('newField');

            var self = this;
            var obj = {};
            $.ajax({
                type: "GET",
                url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + fieldName + "&format=json&callback=?",
                dataType: "json"
            }).then(function (data) {
                console.log(data);
                obj = data;
                self.set("data", data);
            }).fail(function (err) {
                console.log(err);
            })
        }
    }
});
