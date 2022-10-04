import React from "react";
import { AppUI } from "./AppUI.js";

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
  const [proyectos, setProyectos] = React.useState(defaultProyectos);
  const [searchValue, setSearchValue] = React.useState("");

  let proyectosBuscados = [];

  if (!searchValue.length >= 1) {
    proyectosBuscados = proyectos;
  } else {
    proyectosBuscados = proyectos.filter(proyecto => {
      const proyectoNombre = proyecto.nombre.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return proyectoNombre.includes(searchText);
    });
  }

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
