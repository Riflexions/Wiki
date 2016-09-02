import Ember from 'ember';

export default Ember.Route.extend({
   /* model(){
        var searchObject={};
        $.ajax({
            type: "GET",
            url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Sachin&format=json&callback=?",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                console.log(data);
                searchObject=data;
                console.log(searchObject);
            },
            error: function (errorMessage) {
                console.log(errorMessage);
            }
        });
        return ['searchObject'];
    }*/

});
