var mysql = require("mysql");

if(process.env.JAWSDB_URL){

}else{
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "Burgers_db"
  });
}


// Make connection.
connection.connect()
  

// Export connection for our ORM to use.
module.exports = connection;
