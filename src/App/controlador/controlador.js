import React from "react";

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

const POContext = React.createContext();

function POProvider(props) {
  const [proyectos, setProyectos] = React.useState(defaultProyectos);
  const [searchValue, setSearchValue] = React.useState("");
  let unidad = "Unidad de servicio al usuario";
  let jefeUnidad = "Jose Luis Bedoya";
  let proyectosBuscados = [];
  let proyectosTotal = defaultProyectos.length;

  const [openModal, setOpenModal] = React.useState(false);

  const agregarProyecto = (
    nombre,
    fechaInicio,
    fechaFin,
    fechaCreacion,
    estado,
    descripcion
  ) => {
    const newProyectos = [...proyectos];
    newProyectos.push({
      nombre,
      fechaInicio,
      fechaFin,
      fechaCreacion,
      estado,
      descripcion,
    });
  };

  if (!searchValue.length >= 1) {
    proyectosBuscados = proyectos;
  } else {
    proyectosBuscados = proyectos.filter((proyecto) => {
      const proyectoNombre = proyecto.nombre.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return proyectoNombre.includes(searchText);
    });
  }
  return (
    <POContext.Provider
      value={{
        unidad,
        jefeUnidad,
        proyectosTotal,
        proyectosBuscados,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal,
        agregarProyecto
      }}
    >
      {props.children}
    </POContext.Provider>
  );
}

export { POContext, POProvider };
