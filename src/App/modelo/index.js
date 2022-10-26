const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ISW",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO administrador (nombre,correo,contraseña) VALUES ('jose','jose@uao.co', '1234');";

    db.query(sqlInsert, (req, result)=>{
    res.send("se insertó");
    })
});

app.listen(3001, () => {
  console.log("holamihermano, puerto 3001");
});
