//var express =require("express");

// Dependencies
//var mysql = require("mysql");
var express = require("express");
var exphbs = require("express-handlebars");
var connection = require("./config/connection");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 7000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));
// Data
 

 
// Serve index.handlebars to the root route.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", {Order: data});
    
  });
});
 

// Post route -> back to home
app.post("/", (req, res)=>{
    connection.query("INSERT INTO  burgers (burger_name, devoured) VALUE ? ?", 
[{
  burger_name: req.body.burger_name,
  devoured: true
}], 
function(err, result) { 
  console.log("hello")
  if (err) {
    return res.status(500).end();
  }
  console.log("result",  result)
  res.redirect("/");
  res.end();
 
  });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
