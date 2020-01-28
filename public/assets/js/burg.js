 

// var devourEl = document.querySelectorAll(".eaten");
// var btnElement = document.querySelector("data-id");
// console.log("devour", devourEl)

// // //var timeElement = document.querySelector("#time");
// // devourEl.forEach.addEventListener("click", function (event) {
// //     if (event.target === this.data - id("id")) {
// //         //devourEl.style.display = "none";
// //         //alert("hello")
// //         console.log("id", data - id)

// //     }

// // })


// var allBtnEl = document.querySelectorAll(".eaten")
// allBtnEl.forEach(function (event) {
//     event.addEventListener("click", changState) 
         
//     })

// //});

// function changState(){
//     var id = this.data("id");
//     var devour_it = this.data("newburger");

//     var newBurgerState = {
//         devour_it: false
//     };
// }

// function myDunc() {
//     var id = this.data("id");
//     var devour_it = this.data("newburger");

//     var newBurgerState = {
//         devour_it: false
//     };

//     // Send the PUT request.
//       $.ajax("/api/burger/" + id, {
//         type: "PUT",
//         data: newBurgerState
//       }).then(
//         function() {
//           console.log("changed   to", newBurgerState);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     //});
// }

// // Make sure we wait to attach our handlers until the DOM is fully loaded.
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

//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();

//       var newBurger = {
//         burger_name: $("#burgerValue").val().trim(),
//         devour_it: true, 
//       };

//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });

// //     $(".delete-cat").on("click", function(event) {
//       var id = $(this).data("id");

// // Send the DELETE request.
//       $.ajax("/api/cats/" + id, {
//         type: "DELETE"
//       }).then(
//         function() {
//           console.log("deleted cat", id);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
 });

