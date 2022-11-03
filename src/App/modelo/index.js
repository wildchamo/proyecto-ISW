const express = require("express");
const app = express();
const mysql = require("mysql");
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET, POST, PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userID",
    secret: "suscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

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

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const sqlSelect =
    "SELECT idusuario,nombreUsu,nombre,idunidad FROM usuarios WHERE nombreUsu = ? AND contraseña = ?;";

  db.query(sqlSelect, [user, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      const id = result[0].idusuario;
      const token = jwt.sign({ id }, "jwtSecret", {
        expiresIn: 300,
      });

      req.session.user = result;
      res.json({ auth: true, token: token, result: result });
    } else {
      res.send({
        auth: false,
        message: "Combinación de usuario y contraseña incorrectos!",
      });
    }
  });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("necesitas un token papá");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "Falló la autenticación" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

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
  const estado = req.body.estado;
  const idUnidadP = req.body.idUnidadP;

  const sqlInsert = "call ISW.Crear_proyecto_Completo(?,?,?,?,?,?,?);";
  db.query(
    sqlInsert,
    [
      nombreProyecto,
      fechaRegProyecto,
      fechaIniProyecto,
      fechaFinProyecto,
      descripcionProyecto,
      estado,
      idUnidadP,
    ],
    (err, result) => {
      console.log(result);
    }
  );
});

app.listen(3001, () => {
  console.log("holamihermano, puerto 3001");
});
