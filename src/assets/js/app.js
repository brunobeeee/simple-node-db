const dotenv = require('dotenv');
const mysql = require('mysql.js');

dotenv.config({ path: '../../.env'})

// Connect to database
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

// Connect
db.connect(function(err) {
  if (err) {
    console.error('Error whilst connecting to database', err);
    return;
  }
  console.log('Connected with MySQL database');
});

// TODO