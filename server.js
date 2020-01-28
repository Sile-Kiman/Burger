// //var express =require("express");

// // Dependencies
 
// var express = require("express");
// var exphbs = require("express-handlebars");
// var connection = require("./config/connection");

// //var burger = require("../models/burg.js");
// // Create an instance of the express app.
// var app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var PORT = process.env.PORT || 7000;

// // Set Handlebars as the default templating engine.
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
// app.use(express.static('public'));
// // Data



// // Serve index.handlebars to the root route.
// app.get("/", function (req, res) {
//   connection.query("SELECT * FROM burgers;", function (err, data) {
//     if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { Order: data });

//   });
// });


// // Post route -> back to home
// app.post("/", function (req, res) {

//   connection.query("INSERT INTO burgers (burger_name, devour_it) VALUES (?, ?)",
//     [req.body.burgername, true],
//     function (err, result) {

//       if (err) {
//         return res.status(500).end();
//       }
//       console.log("result", result)
//       res.redirect("/");
//       res.end();

//     });
// });

// app.put("/:id", function (req, res) {
//   connection.query("UPDATE burgers SET devour_it = ? WHERE id = ?", [false, req.params.id], function (err, result) {

//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });


var express = require("express");

var PORT = process.env.PORT || 7000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
