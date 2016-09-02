import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        searchT: function (fieldName) {
            alert("raj");
           /* $.ajax({
                type: "GET",
                url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + fieldName + "&format=json&callback=?",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    console.log(data);
                },
                error: function (errorMessage) {
                    console.log(errorMessage);
                }
            });*/



        }
    }
});
