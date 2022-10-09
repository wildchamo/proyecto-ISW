import React from "react";
import { AppUI } from "../vista/AppUI.js";

const defaultProyectos = [
  {
    nombre: "ChatBot Sinapsis (Diseño de flujo)",
    fechaInicio: "2021-11-03",
    fechaFin: "2022-10-02",
    fechaCreacion: "2021-11-03",
    estado: "Activo",
    descripcion: "Soy una descripción",
  },
  {
    nombre: "Investigación arquitectura PWA",
    fechaInicio: "2021-11-03",
    fechaFin: "2022-10-02",
    fechaCreacion: "",
    estado: "Cerrado",
    descripcion: "Soy una descripción",
  },
  {
    nombre: "Software de encuestas Limesurvey",
    fechaInicio: "2021-11-03",
    fechaFin: "2022-10-02",
    fechaCreacion: "",
    estado: "Cancelado",
    descripcion: "Soy una descripción",
  },
];

function App() {


  return (
    <AppUI
      proyectosTotal={defaultProyectos}
      proyectosBuscados={proyectosBuscados}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  );
}

export default App;
