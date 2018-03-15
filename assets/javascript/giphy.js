//XkrBc5pqu8VugMhDu0OZk9oCR5VTuF7b API Key

var cast = ["Bendelacreme", "Shangela", "Trixie Mattel", "Rupaul"];
        console.log(cast);
        // displaygalsInfo function re-renders the HTML to display the appropriate content
        function displaygalsInfo() {
        // for (i=0; i<response.data.length);
        var gals = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gals + "&api_key=XkrBc5pqu8VugMhDu0OZk9oCR5VTuF7b&limit=10";

     
        $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response) {

            // $("#gals-view").empty();
            // console.log(response);
            // console.log(queryURL);
         
            // $("#gals-view").append("<div>" + gals + "</div>");
       
           
            // // console.log(response.data[0].rating);

            // $("#gals-view").append("<div><img src=" + response.data[0].images.preview_gif.url +"></div>");
            // console.log(response.data[0].images.preview_gif.url);

            for (var i = 0; i < 10; i++) {
              console.log("index: "+i);
              var giphyDiv = $("<div>");
              giphyDiv.append("<div>" + response.data[i].rating+ "</div>");
              console.log(response.data[i].rating);
              giphyDiv.append("<img src=" + response.data[i].images.preview_gif.url + ">");
              console.log(response.data[i].images.preview_gif.url);
              // galsimages.attr("src",response.data[i].imagespreview_gif.url);

              $("#gals-view").append(giphyDiv);
            }
        });

      }

      // Function for displaying gals data
      function renderButtons() {

        // Deletes the gals prior to adding new gals
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Loops through the array of gals
        for (var i = 0; i < cast.length; i++) {

          // Then dynamicaly generates buttons for each gals in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of gals to our button
          a.addClass("gals");
          // Added a data-attribute
          a.attr("data-name", cast[i]);
          // Provided the initial button text
          a.text(cast[i]);
          // Added the button to the buttons-view div
          $("#buttons-view").append(a);

        }
      }

      // This function handles events where the add gals button is clicked
      $("#add-gals").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var gal = $("#gal-input").val();
        console.log(gal);
        // The gals from the textbox is then added to our array
        cast.push(gal);

        // Calling renderButtons which handles the processing of our gals array
        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "gals"
      $(document).on("click", ".gals", displaygalsInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();