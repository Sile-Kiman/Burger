var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Burgers_db"
});

connection.connect(function (err) {
  if (err) throw err;
   return
});
module.exports =connection;
