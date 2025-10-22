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

app.get('/api/mahasiswa', (req, res) => {
    db.query('SELECT * from biodata', (err, results) => {
        if (err) {
            console.error('Error executing query:' + err.stack);
            res.status(500).send('Error fetching mahasiswa');
            return;
        }
    });
});

app.post('/api/mahasiswa', (req, res) => {
    const {nama, alamat, agama} = req.body;

    if (!nama || !alamat || !agama) {
        return res.status(400).json({message : "Nama, alamat, dan agama harus diisi."})
    }

    db.query(
        "INSERT INTO biodata (nama, alamat, agama) VALUES (?, ?, ?)",
        [nama, alamat, agama],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Database Error"});
            }
            res.status(201).json({ message: "User created succesfully"});
        }
    );
});