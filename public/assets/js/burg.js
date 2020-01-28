// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eaten").on("click", function(event) {
     // var newburger = false; 
      var id = $(this).data("id");
      var devour_it = $(this).data("newburger");

      var neweatState = {
        devour_it: false,
      };

      // Send the PUT request.
      $.ajax("/" + id, {
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

 });

