import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        searchT: function () {
            alert("raj");
            var baseUrl = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix";

            $.ajax({
                type: "GET",
                url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Sachin_Tendulkar&callback=?",
                contentType: "application/json; charset=utf-8",
                async: false,
                dataType: "json",
                success: function (data, textStatus, jqXHR) {
                    console.log(data);
                },
                error: function (errorMessage) {
                    console.log(errorMessage);
                }
            });




            /* var flickerAPI = "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix";
             $.getJSON(baseUrl, {
                     tags: "mount rainier",
                     tagmode: "any",
                     format: "json"
                 })
                 .done(function (data) {
                     console.log(data);
                     $.each(data.items, function (i, item) {
                         $("<img>").attr("src", item.media.m).appendTo("#images");
                         if (i === 3) {
                             return false;
                         }
                     });
                 });*/




        }
    }
});
