const express = require('express');
const mysql = require('mysql2');  
const app = express();

const db = mysql.createConnection({
  host: 'db',  
  user: 'root',
  password: 'password',
  database: 'fullcycle'
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to database', err);
    throw err;
  }
  console.log('Connected to database');

  let createTableQuery = 'CREATE TABLE IF NOT EXISTS people (name VARCHAR(50))';
  db.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log('Table created or already exists');
  });
});

app.get('/', (req, res) => {
  let sql = "INSERT INTO people(name) VALUES('Full Cycle Rocks!')";
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log("record inserted");

    let query = "SELECT * FROM people";
    db.query(query, (err, results) => {
      if(err) throw err;
      res.send(`<h1>Full Cycle Rocks!</h1><br>${results.map(person => person.name).join('<br>')}`);
    });
  });
});

app.listen(3000, () => console.log('Server is up and running'));
