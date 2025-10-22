const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

const PORT = 3001;

app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      
  port: 3309,
  password: '8U6ty7r5@371818',      
  database: 'mahasiswa'
});

db.connect((err) => {
  if (err) console.error('Koneksi database gagal:', err);
  else console.log('Berhasil konek ke database MySQL!');
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:' + err.stack);
        return;
    }
    console.log('Connected Succesfully');
});

