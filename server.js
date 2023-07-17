const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const db = new sqlite3.Database("database.db");

let sortorder = 'asc'; // Switches back and forth to sort ASC <> DESC
let sortby = 'id'; // Switches back and forth to reset ASC/DESC when changing column

// Enable ejs files
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Expose static files
app.use(express.static(__dirname + '/public'));

// Route for rendering the homepage
app.get('/', (req, res) => {
  // When clicking on the column title and the column is the same the sort order is switched ASC <> Desc
  if (sortby == req.query.sortby && sortorder == 'asc') {
    sortorder = 'desc';
  } else {
    sortorder = 'asc';
  }

  // Save latest column clicked
  if (req.query.sortby != undefined) {
    sortby = req.query.sortby;
  }

  db.all(`SELECT * FROM tablename ORDER BY ${sortby} ${sortorder}`, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.render('index', { data: rows });
    }
  });
});


// Route for updating a record in the database
app.post('/data', (req, res) => {
  const newName = req.body.name;
  
  db.run('INSERT INTO tablename (name) VALUES (?)', [newName], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.redirect('/');
    }
  });
});

// Route for rendering the edit form for a record
app.get('/data/:id/edit', (req, res) => {
  const id = req.params.id;

  db.get('SELECT * FROM tablename WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.render('edit', { data: row });
    }
  });
});

// Route for editing a record (GET request)
app.get('/data/:id', (req, res) => {
  const id = req.params.id;

  db.get('SELECT * FROM tablename WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.render('edit', { data: row });
    }
  });
});

// Route for editing a record (POST request)
app.post('/data/:id', (req, res) => {
  const id = req.params.id;
  const newName = req.body.name;

  db.run('UPDATE tablename SET name = ? WHERE id = ?', [newName, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.redirect('/');
    }
  });
});

// Route for deleting a database entry
app.delete('/data/:id', (req, res) => {
  const id = req.params.id;

  db.run('DELETE FROM tablename WHERE id = ?', [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.redirect('/');
    }
  });
});

  

// Starting the server
const port = 1234;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
