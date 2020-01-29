// var express = require("express");

// var router = express.Router();

// // Import the model burger.js to use its database functions.
// var burger = require("../models/burger.js");

// /// Serve index.handlebars to the root route.
// app.get("/", function (req, res) {
//    SVGPathSegLinetoVerticalRel(), function (err, data) {
//     if (err) {
// //       return res.status(500).end();
// //     }

// //     res.render("index", { Order: data });

// //   });
// // });


// // // Post route -> back to home
// // app.post("/", function (req, res) {

// //   connection.query("INSERT INTO burgers (burger_name, devour_it) VALUES (?, ?)",
// //     [req.body.burgername, true],
// //     function (err, result) {

// //       if (err) {
// //         return res.status(500).end();
// //       }
// //       console.log("result", result)
// //       res.redirect("/");
// //       res.end();

// //     });
// // });

// // app.put("/:id", function (req, res) {
// //   connection.query("UPDATE burgers SET devour_it = ? WHERE id = ?", [false, req.params.id], function (err, result) {

// //     if (err) {
// //       // If an error occurred, send a generic server failure
// //       return res.status(500).end();
// //     }
// //     else if (result.changedRows === 0) {
// //       // If no rows were changed, then the ID must not exist, so 404
// //       return res.status(404).end();
// //     }
// //     res.status(200).end();

// //   });
// // });

// // // Export routes for server.js to use.
// // module.exports = router;


// var express = require("express");

// var router = express.Router()

// // Import the model (cat.js) to use its database functions.
// var burgers = require("../models/burger.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//   burgers.selectAll(function (data) {
//     if (err) {
//       return res.status(500).end();
//     }
//     res.render("index", { Order: data });
//   });
// });

// router.post("/", function (req, res) {
//   [req.body.burgername, true],
//     burgers.insert(function (data) {
//       if (err) {
//         return res.status(500).end();
//       }
//       //console.log("result", result)
//       res.redirect("/");
//       res.end();
//     });
// })

// router.put("/:id", function (req, res) {
//   //[false, req.params.id],  
//   var id = "id = " + req.params.id;
//   burgers.update({
//     devour_it: false
//   }, id, function (result) {
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
//  })
// // // Export routes for server.js to use.
// module.exports = router;


var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject  = {
      burger_name: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject );
    //res.render("index", { Order: data });
  });
});

router.post("/api/burger", function(req, res) {
  burger.create([
    "burger_name", "devour_it"
  ], [
    req.body.burger_name, true
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    //res.redirect("/");
  });
});

router.put("/api/burger:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

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


// Export routes for server.js to use.
module.exports = router;
