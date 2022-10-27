const express = require("express");
const app = express();
const mysql = require("mysql");
var cors = require('cors')

app.use(cors()) 

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ISW",
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "call ISW.Consultar_Proyectos()";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
})  

// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO administrador (nombre,correo,contraseña) VALUES ('jose','jose@uao.co', '1234');";

//     db.query(sqlInsert, (req, result)=>{
//     res.send("se insertó");
//     })
// });

app.listen(3001, () => {
  console.log("holamihermano, puerto 3001");
});
