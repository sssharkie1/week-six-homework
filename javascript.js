

	var topics = ["elephant","crow", "guinea hen", "sloth","wombat","dog"];


	function renderButtons() {

	for (var i = 0; i < topics.length; i++) {
      $("#buttons-view").append("<button class='topicClass' id='button' data-name = '" + topics[i]
      + "'>" + topics[i] + "</button>");
      }
  };          
		

		  $("#add-topic").on("click", function(event) {
				event.preventDefault();
				var topic = $("#topic-input").val().trim();
				topics.push(topic);

  			$("#topic-input").val('');
        $("#buttons-view").empty();
        renderButtons();

		  });


		function displayTopicInfo() {


        var topic = $(this).data("name");
      	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        topic + "&api_key=dc6zaTOxFJmzC&limit=10"; //change to ten when done
console.log(topic);
        $.ajax({
          url: queryURL,
          method: "GET",
        })
        .done(function(response) {

          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);

            var topicImage = $("<img>");

            topicImage.attr("src", results[i].images.fixed_height_still.url);

            //added these
            topicImage.attr("data-still", results[i].images.fixed_height_still.url);
            topicImage.attr("data-animate", results[i].images.fixed_height.url);
            topicImage.attr("data-state", "still");
            topicImage.addClass("gif");

            //end of added

            gifDiv.prepend(p);
            gifDiv.prepend(topicImage);
            $("#gifs-appear-here").prepend(gifDiv);
          }
        })
      }

    $(document).on("click", ".topicClass",displayTopicInfo);
    renderButtons();

    $(document).on("click", ".gif", function(){

      var state = $(this).attr("data-state");
      console.log(state);
        if (state === "still"){
          var newSource = $(this).attr("data-animate");
          $(this).attr("src",newSource);
          $(this).attr("data-state","animate");
      }
      else if (state==="animate"){
          var newSource = $(this).attr("data-still");
          $(this).attr("src",newSource);
          $(this).attr("data-state","still");
      }

  console.log($(this).attr("data-state"));
  });
  