// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eaten").on("click", function(event) {
     // var newburger = false; 
      var id = $(this).data("id");
      //var devour_it = $(this).data("newburger");

      var neweatState = {
        devour_it: false,
      };

      // Send the PUT request.
      $.ajax("/api/burger" + id, {
        type: "PUT",
        data: neweatState
      }).then(
        function() {
          console.log("changed   to", neweatState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burgerValue").val().trim(),
          devour_it: true,
        };
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

     
    });
    
    
 //});

