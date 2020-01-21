var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToOrder, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(whatToInsert, table, orderCol) {
      var queryString = "INSERT ?? INTO ?? ORDER BY ?? DESC";
      console.log(queryString);
      connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableOneCol, table,) {
      var queryString =
        "UPDATE SET ??,  ";
  
      connection.query(
        queryString,
        [tableOneCol],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  module.exports =orm;