const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();
// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.HOSTDB,
  user: process.env.USERNAMEDB,
  password: process.env.PASSWORDDB,
  database: process.env.DATABASE
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;