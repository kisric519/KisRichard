const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(cors())



const port = 3333;
app.listen(port, () => {
  console.log(`Szerver fut a ${port} porton!`);
});