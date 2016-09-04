import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        var value= params.title;
        var self = this;
        return Ember.$.ajax({
            type: "GET",
            url: "http://en.wikipedia.org/w/api.php?action=query&prop=extracts|info&exintro&titles=" + value + "&format=json&explaintext&redirects&inprop=url&indexpageids&callback=?",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            self.set("title", value);
            var id = data.query.pageids[0];
            var extract = data.query.pages[id].extract;
            return {
                title:value,
                extract:extract
            };
        }).fail(function (err) {
            console.log(err);
        })
    }
});
