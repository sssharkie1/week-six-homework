var topics = ["cat", "elephant", "mule", "guinea hen"]

function alertMovieName() {

				

					// YOUR CODE GOES HERE!!!

				}



				function renderButtons() {

					// Deleting the movies prior to adding new movies
					// (this is necessary otherwise we will have repeat buttons)
					$("#addTopic").empty();

					// Looping through the array of movies
					for (var i = 0; i < topics.length; i++) {

						// Then dynamicaly generating buttons for each movie in the array
						// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
						var a = $("<button>");
						// Adding a class
						a.addClass("topic");
						// Added a data-attribute
						a.attr("data-name", topics[i]);
						// Provided the initial button text
						a.text(topics[i]);
						// Added the button to the HTML
						$("#addTopic").append(a);
					}
				}

				$("#addTopic").on("click", function(event) {
					event.preventDefault();

					// This line grabs the input from the textbox
					var topics = $("#topicInput").val().trim();

					// The topics from the textbox is then added to our array
					topics.push(topics);

					// Calling renderButtons which handles the processing of our movie array
					renderButtons();
				});


