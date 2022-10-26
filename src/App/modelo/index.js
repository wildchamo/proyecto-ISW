const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hola");
});

app.listen(3001, () => {
  console.log("holamihermano, puerto 3001");
});
