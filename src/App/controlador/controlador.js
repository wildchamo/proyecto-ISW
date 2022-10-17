import React from "react";

const defaultProyectos = [
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
    fechaCreacion: "2022-10-02",
    estado: "Cancelado",
    descripcion: "Soy una descripción",
  },
  {
    nombre: "ChatBot Sinapsis (Diseño de flujo)",
    fechaInicio: "2021-11-03",
    fechaFin: "2022-10-02",
    fechaCreacion: "2021-11-03",
    estado: "Activo",
    descripcion: "Soy una descripción",
  },
];

const POContext = React.createContext();

function POProvider(props) {
  const [proyectos, setProyectos] = React.useState(defaultProyectos);
  const [proyectoSelec, setProyectoSelec] = React.useState();
  const [searchValue, setSearchValue] = React.useState("");
  const [ordenarArregloDes, setOrdenarArregloDes] = React.useState(false);
  const [ordenarArregloAsc, setOrdenarArregloAsc] = React.useState(false);
  //Gabriela
  const [ordenarArregloAscFI, setOrdenarArregloAscFI] = React.useState(false);
  const [ordenarArregloDesFI, setOrdenarArregloDesFI] = React.useState(false);
  const [ordenarArregloAscFF, setOrdenarArregloAscFF] = React.useState(false);
  const [ordenarArregloDesFF, setOrdenarArregloDesFF] = React.useState(false);

  let unidad = "Unidad de servicio al usuario";
  let jefeUnidad = "Carolina Parra";
  let proyectosBuscados = [];
  let proyectosTotal = proyectos.length;

  const [openModal, setOpenModal] = React.useState(false);
  const [openModalEditar, setOpenModalEditar] = React.useState(false);
  const [openModalVerMas, setOpenModalVerMas] = React.useState(false);

  var fechaHoy = new Date();
  var dd = String(fechaHoy.getDate()).padStart(2, "0");
  var mm = String(fechaHoy.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = fechaHoy.getFullYear();

  fechaHoy = yyyy + "-" + mm + "-" + dd;

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
    setProyectos(newProyectos);
  };

  const editarProyecto = (
    nombre,
    fechaInicio,
    fechaFin,
    fechaCreacion,
    estado,
    descripcion
  ) => {
    proyectoSelec.nombre = nombre;
    proyectoSelec.fechaInicio = fechaInicio;
    proyectoSelec.fechaFin = fechaFin;
    proyectoSelec.fechaCreacion = fechaCreacion;
    proyectoSelec.estado = estado;
    proyectoSelec.descripcion = descripcion;
  };

  if (ordenarArregloDes) {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.nombre < b.nombre) return -1;
      if (a.nombre > b.nombre) return 1;
      return 0;
    });
  }

  if (ordenarArregloAsc) {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.nombre < b.nombre) return 1;
      if (a.nombre > b.nombre) return -1;
      return 0;
    });
  }

  if (ordenarArregloAscFI) {
    alert("Arreglar arreglo1");
  }
  if (ordenarArregloDesFI) {
    alert("Arreglar arreglo1");
  }
  if (ordenarArregloAscFF) {
    alert("Arreglar arreglo1");
  }
  if (ordenarArregloDesFF) {
    alert("Arreglar arreglo1");
  }

  if (!searchValue.length >= 1) {
    proyectosBuscados = proyectos;
  } else {
    proyectosBuscados = proyectos.filter((proyecto) => {
      const proyectoNombre = proyecto.nombre.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return proyectoNombre.includes(searchText);
    });
  }

  const anularProyecto = (text) => {
    const proyectoIndex = proyectosBuscados.findIndex(
      (proyecto) => proyecto.nombre === text
    );
    const newProyectos = [...proyectos];
    console.log(newProyectos);
    newProyectos[proyectoIndex].estado = "Anulado";
    setProyectos(newProyectos);
  };

  const mostrarProyecto = (text) => {
    const proyectoIndex = proyectosBuscados.findIndex(
      (proyecto) => proyecto.nombre === text
    );
    setProyectoSelec(proyectos[proyectoIndex]);
  };

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
        agregarProyecto,
        editarProyecto,
        openModalEditar,
        setOpenModalEditar,
        openModalVerMas,
        setOpenModalVerMas,
        ordenarArregloDes,
        setOrdenarArregloDes,
        ordenarArregloAsc,
        setOrdenarArregloAsc,

        ordenarArregloAscFI,
        setOrdenarArregloAscFI,
        ordenarArregloDesFI,
        setOrdenarArregloDesFI,
        ordenarArregloAscFF,
        setOrdenarArregloAscFF,
        ordenarArregloDesFF,
        setOrdenarArregloDesFF,
        anularProyecto,
        mostrarProyecto,
        proyectoSelec,
        fechaHoy,
      }}
    >
      {props.children}
    </POContext.Provider>
  );
}

export { POContext, POProvider };
