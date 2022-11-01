const express = require("express");
const app = express();
const mysql = require("mysql");
var cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ISW",
});
app.get("/api/get/es", (req, res) => {
  const sqlSelect = "SELECT * FROM ISW.estado where not nombre='Anulado';";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/get", (req, res) => {
  const user = req.body.user;
  const sqlSelect = "call ISW.Consultar_Proyectos_Por_Unidad(?);";
  db.query(sqlSelect, [user], (err, result) => {
    res.send(result);
  });
});

app.post("/login", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const sqlSelect =
    "SELECT nombreUsu,nombre,idunidad FROM usuarios WHERE nombreUsu = ? AND contraseña = ?;";

  db.query(sqlSelect, [user, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({
        message: "Combinación de usuario y contraseña incorrectos!",
      });
    }
  });
});

app.put("/api/anul", (req, res) => {
  const idProyecto = req.body.idProyecto;
  const razon = req.body.razon;

  console.log(idProyecto);
  console.log(razon);

  const sqlUpdate = "call ISW.Modificar_Estados_Anulados(?,?);";
  db.query(sqlUpdate, [idProyecto, razon], (err, result) => {
    console.log(result);
  });
});

app.post("/api/insert", (req, res) => {
  const nombreProyecto = req.body.nombreProyecto;
  const fechaRegProyecto = req.body.fechaRegProyecto;
  const fechaIniProyecto = req.body.fechaIniProyecto;
  const fechaFinProyecto = req.body.fechaFinProyecto;
  const descripcionProyecto = req.body.descripcion;
  const estado= req.body.estado;
  const idUnidadP = req.body.idUnidadP;

  const sqlInsert =
    "call ISW.Crear_proyecto_Completo(?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [
      nombreProyecto,
      fechaRegProyecto,
      fechaIniProyecto,
      fechaFinProyecto,
      descripcionProyecto,
      estado,
      idUnidadP
    ],
    (err, result) => {
      console.log(result);
    }
  );
});

app.listen(3001, () => {
  console.log("holamihermano, puerto 3001");
});
