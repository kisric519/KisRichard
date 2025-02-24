const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3306,
    password: "",
    database: "fogado"
});


app.get("/", (req,res) => {
    res.send("Szerver fut");
});

app.get("/szobak", (req,res) => {
  const sql = "SELECT * FROM `szobak`";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/szoba/:id", (req,res) => {
  const id = req.params.id

  const sql = "SELECT * FROM `szobak` WHERE szazon = "+id;
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});


const port = 3001;
app.listen(port, () => {
  console.log(`Szerver fut a ${port} porton!`);
});