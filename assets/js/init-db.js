// Run this once to initialize the SQLite database
// `node init-db.js`
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS tablename (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
});

db.close();
