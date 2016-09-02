import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        searchT: function (fieldName) {

            var self = this;
            var obj = {};
            $.ajax({
                type: "GET",
                url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + fieldName + "&format=json&callback=?",
                async: false,
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    console.log(data);
                    obj = data;
                    self.set("data", data);

                },
                error: function (errorMessage) {
                    console.log(errorMessage);
                }
            });



        },
        searchDetails: function (value) {
            var self = this;
            $.ajax({
                type: "GET",
                url: "http://en.wikipedia.org/w/api.php?action=query&prop=extracts|info&exintro&titles=" + value + "&format=json&explaintext&redirects&inprop=url&indexpageids&callback=?",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    console.log(data);
                    self.set("details", data);
                    var id = data.query.pageids;
                    var extract = data.query.pages[id].extract;
                    self.set("extract", extract);
                },
                error: function (errorMessage) {
                    console.log(errorMessage);
                }
            });
        }

    }
});
