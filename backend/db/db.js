const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fashion_store'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database successfully connected');
});

module.exports = db;
