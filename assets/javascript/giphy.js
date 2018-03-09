//XkrBc5pqu8VugMhDu0OZk9oCR5VTuF7b API Key

var characters = ["Bendelacreme", "Shangela", "Trixie Mattel", "Rupaul"];

      // displayCharactersInfo function re-renders the HTML to display the appropriate content
      function displayCharactersInfo() {
        // for (i=0; i<response.data.length);
        var Characters = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + Characters + "&api_key=XkrBc5pqu8VugMhDu0OZk9oCR5VTuF7b&limit=5";

        // Creates AJAX call for the specific Characters button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

            $("#characters-view").empty();
            console.log(response);
            console.log(queryURL);
            // Creates a div to hold the Characters
            $("#characters-view").append("<div>" + Characters + "</div>");
            // Retrieves the Rating Data
            
            // Creates an element to have the rating displayed
            $("#characters-view").append("<div>" + response.data[0].rating+ "</div>");
            console.log(response.data[0].rating);
            // Displays the rating
            // Retrieves the release year
            // $("#characters-view").append("<div>"+ response.Year + "</div>");
            // Creates an element to hold the release year
            // Displays the release year
            // Retrieves the plot
            // Creates an element to hold the plot
            // Appends the plot
            // Creates an element to hold the image
            // Appends the image
            $("#characters-view").append("<div><img src=" + response.data[0].images.preview_gif.url +"></div>");
            console.log(response.data[0].images.preview_gif.url);
            // Puts the entire Characters above the previous characters.

        });

      }

      // Function for displaying Characters data
      function renderButtons() {

        // Deletes the characters prior to adding new characters
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Loops through the array of characters
        for (var i = 0; i < characters.length; i++) {

          // Then dynamicaly generates buttons for each Characters in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of Characters to our button
          a.addClass("Characters");
          // Added a data-attribute
          a.attr("data-name", characters[i]);
          // Provided the initial button text
          a.text(characters[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where the add Characters button is clicked
      $("#add-Characters").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var Characters = $("#Characters-input").val().trim();

        // The Characters from the textbox is then added to our array
        characters.push(Characters);

        // Calling renderButtons which handles the processing of our Characters array
        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "Characters"
      $(document).on("click", ".Characters", displayCharactersInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();