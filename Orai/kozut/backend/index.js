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
  database: "kozutak"
});

app.get("/", (req,res) => {
  res.send("Szerver fut");
});

app.get("/regiok", (req,res) => {
  const sql = "SELECT * FROM `regiok`";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/8_id", (req,res) => {
  const sql = "SELECT * FROM `regiok` WHERE Rid = 8;";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

const port = 3333;
app.listen(port, () => {
  console.log(`Szerver fut a ${port} porton!`);
});