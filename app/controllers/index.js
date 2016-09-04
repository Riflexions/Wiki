import Ember from 'ember';
/* globals  $ */
export default Ember.Controller.extend({
    actions: {
        searchT: function (fieldName) {
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
        },
        searchDetails: function (value) {
            var self = this;
            $.ajax({
                type: "GET",
                url: "http://en.wikipedia.org/w/api.php?action=query&prop=extracts|info&exintro&titles=" + value + "&format=json&explaintext&redirects&inprop=url&indexpageids&callback=?",
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).then(function (data) {
                console.log(data);
                self.set("details", data);
                var id = data.query.pageids[0];
                var extract = data.query.pages[id].extract;
                self.set("extract", extract);;
            }).fail(function (err) {
                console.log(err);
            })
        }
    }
});
