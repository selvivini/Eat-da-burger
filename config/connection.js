// Set up MySQL connection.
const mysql = require('mysql');
const dotEnv = require('dotenv');

const result= dotEnv.config();
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  // NOTE: Be sure to add your MySQL password here!
  password: process.env.DB_PASS,
  database: 'burgers_db',
});

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
