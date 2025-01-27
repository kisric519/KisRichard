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

//Összes réfió lekérése
app.get("/regiok", (req,res) => {
  const sql = "SELECT * FROM `regiok`";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//Egy régió lekérése
app.get("/regio/:id", (req,res) => {
  const Rid = req.params.id
  const sql = "SELECT * FROM `regiok` WHERE Rid = ?;" ;
  const values = [Rid];

  db.query(sql, values, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//Régió felvétele
app.post("/ujregio", (req,res) =>{
  const sql = "INSERT INTO `regiok` (`Rid`, `regionev`, `regio_tipusa`) VALUES (?,?,?)";
  const values = ['11', 'Budapest', 'Főváros'];

  db.query(sql, values, (err, result) => {
    if (err){
      console.error("Hiba történt: ", err)
      return res.status(500).json({error: "Adatbázis hiba történt"})
    }
    return res.status(200).json({message: "Sikeres beszúrás", result});
  });
})

const port = 3333;
app.listen(port, () => {
  console.log(`Szerver fut a ${port} porton!`);
});