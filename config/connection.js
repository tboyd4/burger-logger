// Set up MySQL connection.
var mysql = require("mysql");

// retrieve database password
const keys = require('./keys');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: keys.databasePass,
  database: "burger_logger_DB"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;