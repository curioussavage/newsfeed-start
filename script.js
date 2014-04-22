$(document).ready(function() {

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
        
    for (var i = 0; i < response.results.length; i++) {

        $(".newsfeed").append("<div class="newsitem"><h1>" + response.results[i].title + "</h1> <p> " + response.results[i].body + "</p> </div>");

    }

  
});


});