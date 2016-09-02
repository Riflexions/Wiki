import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        searchT: function () {
            alert("raj");
            var baseUrl = "https://api.github.com/search/repositories?q=angular";
            $.getJSON(baseUrl)
                .done(function (data) {
                    console.log(data);
                });



        }
    }
});
