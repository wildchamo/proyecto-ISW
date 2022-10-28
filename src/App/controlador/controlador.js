import React from "react";
import Axios from "axios";
import { useEffect } from "react";

//const estados = ["Activo", "Cerrado", "Suspendido", "Cancelado"];

//creación del context
const POContext = React.createContext();

function POProvider(props) {
  //seteamos los estados necesarios para la implementación del proyecto, los estados cambian según las
  //interacciones que realice el usuario con el componente vista

  //cargamos la lista de proyectos en un estado
  const [proyectos, setProyectos] = React.useState([]);
  const [loginStatus, setLoginStatus] = React.useState();

  const Login = (user, password) => {
    Axios.post("http://localhost:3001/login", {
      user: user,
      password: password,
    }).then((response) => {
      console.log(response);
      // if (response.data.message) {
      //   setLoginStatus(response.data.message);
      //   console.log(loginStatus);
      //   // history("/dashboard");
      // } else {
      //   setLoginStatus(response.data[0]);
      // }
    });
  };
  //lista de estados
  const [estados, setEstados] = React.useState([]);

  //para mostrar un proyecto en especifico es necesario extraer sus datos, por tanto se encapsula temporalmente en el estado
  //proyectoSelect
  const [proyectoSelec, setProyectoSelec] = React.useState();

  //se almacena el valor escrito por el usuario en el campo para buscar proyectos en un estado
  const [searchValue, setSearchValue] = React.useState("");
  //estados que reciben el click del usuario en las flechas para organizar los proyectos de forma descendente o ascendente
  const [ordenarArregloDes, setOrdenarArregloDes] = React.useState(false);
  const [ordenarArregloAsc, setOrdenarArregloAsc] = React.useState(false);
  const [ordenarArregloAscFI, setOrdenarArregloAscFI] = React.useState(false);
  const [ordenarArregloDesFI, setOrdenarArregloDesFI] = React.useState(false);
  const [ordenarArregloAscFF, setOrdenarArregloAscFF] = React.useState(false);
  const [ordenarArregloDesFF, setOrdenarArregloDesFF] = React.useState(false);

  //se almacena el estado seleccionado por el usuario para filtrar los proyectos que incluyan ese estado
  const [estadoSelec, setEstadoSelec] = React.useState("");

  //datos generales de la sesión
  let unidad = "Unidad de servicio al usuario";
  let jefeUnidad = "Carolina Parra";
  let usuarioJefe = "jcortes";

  //se setean estados que funcionan como condicionales para "prender y apagar" los distintos modales de la aplicación

  const [openModal, setOpenModal] = React.useState(false);
  const [openModalEstado, setOpenModalEstado] = React.useState(false);
  const [openModalEditar, setOpenModalEditar] = React.useState(false);
  const [openModalVerMas, setOpenModalVerMas] = React.useState(false);
  const [openModalAnular, setOpenModalAnular] = React.useState(false);

  //llamamos a los proyectos de la BD utilizando el modelo
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProyectos(response.data[0]);
    });
  }, []);

  if (openModal || openModalEditar || openModalVerMas) {
    Axios.get("http://localhost:3001/api/get/es").then((response) => {
      setEstados(response.data);
    });
  }

  var fechaHoy = new Date();
  var dd = String(fechaHoy.getDate()).padStart(2, "0");
  var mm = String(fechaHoy.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = fechaHoy.getFullYear();

  fechaHoy = yyyy + "-" + mm + "-" + dd;

  //se crea un arreglo llamado proyectos buscados para que guarde los proyectos que tengan coincidencia con la busqueda
  //del proyecto realizado por el usuario, este arreglo será lo que se imprima
  let proyectosBuscados = [];
  //se extrae el número de proyectos del arreglo para imprimirlo en pantalla
  let proyectosTotal = proyectos.length;

  //filtros que almacenan los proyectos según su estado y creación de variables que almacena el número de proyectos
  //con ese estado

  let proyectosActivos = proyectos.filter(
    (proyecto) => proyecto.estado === "Activo"
  );
  let proyectosActivosValue = proyectosActivos.length;

  let proyectosCerrados = proyectos.filter(
    (proyecto) => proyecto.estado === "Cerrado"
  );
  let proyectosCerradosValue = proyectosCerrados.length;

  let proyectosAnulados = proyectos.filter(
    (proyecto) => proyecto.estado === "Anulado"
  );
  let proyectosAnuladosValue = proyectosAnulados.length;

  let proyectosCancelados = proyectos.filter(
    (proyecto) => proyecto.estado === "Cancelado"
  );
  let proyectosCanceladosValue = proyectosCancelados.length;

  let proyectosSuspendidos = proyectos.filter(
    (proyecto) => proyecto.estado === "Suspendido"
  );
  let proyectosSuspendidosValue = proyectosSuspendidos.length;

  //función para agregar proyectos
  const agregarProyecto = (
    nombre,
    fechaInicio,
    fechaFin,
    fechaCreacion,
    estado,
    descripcion
  ) => {
    // const newProyectos = [...proyectos];
    // newProyectos.push({
    //   nombre,
    //   fechaInicio,
    //   fechaFin,
    //   fechaCreacion,
    //   estado,
    //   descripcion,
    // });
    // setProyectos(newProyectos);
    console.log(fechaInicio);
    console.log(nombre);
    Axios.post("http://localhost:3001/api/insert", {
      nombreProyecto: nombre,
      fechaRegProyecto: fechaCreacion,
      fechaIniProyecto: fechaInicio,
      fechaFinProyecto: fechaFin,
      descripcion: descripcion,
    }).then(() => {
      alert("todo bien");
    });
  };

  //función para editar proyectos, utiliza el valor del proyecto seleccionado para modificarlo
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

  //en el caso que se presionen las flechas para ordenar los proyectos, las siguientes funciones los ordenan

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
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.fechaInicio < b.fechaInicio) return 1;
      if (a.fechaInicio > b.fechaInicio) return -1;
      return 0;
    });
  }

  if (ordenarArregloDesFI) {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.fechaInicio < b.fechaInicio) return -1;
      if (a.fechaInicio > b.fechaInicio) return 1;
      return 0;
    });
  }
  if (ordenarArregloAscFF) {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.fechaFin < b.fechaFin) return 1;
      if (a.fechaFin > b.fechaFin) return -1;
      return 0;
    });
  }
  if (ordenarArregloDesFF) {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.fechaFin < b.fechaFin) return -1;
      if (a.fechaFin > b.fechaFin) return 1;
      return 0;
    });
  }

  //en el caso que el valor de busqueda cambie y sea mayor o igual a 1, se filtrará para que se impriman solo los proyectos
  //que incluyen el valor buscado ensu nombre

  if (!searchValue.length >= 1) {
    proyectosBuscados = proyectos;
  } else {
    proyectosBuscados = proyectos.filter((proyecto) => {
      const proyectoNombre = proyecto.nombre.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return proyectoNombre.includes(searchText);
    });
  }
  //en el caso que el estado seleccinado cambie, se filtrará para que se impriman solo los proyectos
  //que incluyen el valor del estado
  if (!estadoSelec.length > 0) {
    proyectosBuscados = proyectosBuscados;
  } else {
    console.log(estadoSelec);
    proyectosBuscados = proyectos.filter((proyecto) => {
      const proyectoEstado = proyecto.estado;
      return proyectoEstado.includes(estadoSelec);
    });
  }
  //función para anular proyecto
  const anularProyecto = (text, razon) => {
    const proyectoIndex = proyectosBuscados.findIndex(
      (proyecto) => proyecto.nombre === text
    );
    const newProyectos = [...proyectos];
    console.log(newProyectos);
    newProyectos[proyectoIndex].estado = "Anulado";
    newProyectos[proyectoIndex].motivoCancelacion = razon;
    setProyectos(newProyectos);
  };
  //función que realiza una consulta utilizando el nombre del proyecto clickado para mostrarlo después en un interfaz

  const mostrarProyecto = (text) => {
    const proyectoIndex = proyectosBuscados.findIndex(
      (proyecto) => proyecto.ID === text
    );
    setProyectoSelec(proyectos[proyectoIndex]);
  };
  let proyectosBTotal = proyectosBuscados.length;

  // todo lo que se exporta de la aplicación para que la vista y los componentes lo consuman y puedan cambiarlo
  return (
    <POContext.Provider
      value={{

        Login,
        //valores
        unidad,
        jefeUnidad,
        fechaHoy,
        proyectosTotal,
        proyectosBuscados,
        estados,
        proyectosBTotal,
        setProyectos,
        usuarioJefe,

        //busqueda
        searchValue,
        setSearchValue,

        //seleccionados
        proyectoSelec,
        estadoSelec,
        setEstadoSelec,

        //modales
        openModal,
        setOpenModal,
        openModalEditar,
        setOpenModalEditar,
        openModalVerMas,
        setOpenModalVerMas,
        openModalEstado,
        setOpenModalEstado,
        openModalAnular,
        setOpenModalAnular,
        //filtros
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

        //metodos
        agregarProyecto,
        editarProyecto,
        anularProyecto,
        mostrarProyecto,

        //Grafica
        proyectosActivosValue,
        proyectosCerradosValue,
        proyectosAnuladosValue,
        proyectosCanceladosValue,
        proyectosSuspendidosValue,
      }}
    >
      {props.children}
    </POContext.Provider>
  );
}

export { POContext, POProvider };
