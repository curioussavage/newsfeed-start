$(document).ready(function() {

//    function render(article){
//
//    };


$.ajax('https://api.parse.com/1/classes/NewsItem', 
  {
    beforeSend: function(request) {
            request.setRequestHeader('X-Parse-Application-Id', 'yFcbP3VHGZigGyqTnRV0m7vlD275M60LFAUbfw3v');
            request.setRequestHeader('X-Parse-REST-API-Key', 'PV29bK5zFnaICL8lI4Z7aAqzfx358naGok1HWP1N');
        }
    }
).done(function(response) {
  //populate list here with jQuery
        console.log(response);
        var articles = response.results;
    for (var i = 0; i < articles.length; i++) {

        $(".newsfeed").append("<div class='newsitem'><h1>" +
            articles[i].title + "</h1> <p> " +
            articles[i].body + "</p> </div>");

      //  render();

    }

  
});


});