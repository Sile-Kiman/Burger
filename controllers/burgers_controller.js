var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var Order  = {
      burger_name: data
    };
    res.render("index", Order );
     
  });
});

//Post method to post new entry
router.post("/api/burger/", function(req, res) {
  burger.create([
    "burger_name", "devour_it"
  ], [
    req.body.burger_name, true
  ], function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//Update method
router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({
    devour_it: false
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
   });
});
//Delete   method
router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
