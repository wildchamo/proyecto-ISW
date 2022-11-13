import React, { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

//creación del context
const POContext = React.createContext();

function POProvider(props) {
  //seteamos los estados necesarios para la implementación del proyecto, los estados cambian según las
  //interacciones que realice el usuario con el componente vista
  const history = useNavigate();

  //cargamos la lista de proyectos en un estado
  const [proyectos, setProyectos] = React.useState([]);
  const [loginStatus, setLoginStatus] = React.useState({});

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0][0]);
        mostrarP(response.data.user[0][0].nombreUsu);
      }
    });
  }, []);

  //datos generales de la sesión
  let unidadid = loginStatus.idunidad;
  let unidad = loginStatus.nombreUnidad;
  let jefeUnidad = loginStatus.nombre;
  let usuariojefe = loginStatus.nombreUsu;

  //función para llamar a los proyectos de la BD utilizando el modelo
  const mostrarP = (user) => {
    Axios.post("http://localhost:3001/api/get", {
      user: user,
    }).then((response) => {
      setProyectos(response.data[0]);
    });
  };

  const logout = () => {
    setLoginStatus({});
    setProyectos([]);
    history("/");
  };

  //función para logearse en la app que se conecta con el modelo
  const Login = (user, password) => {
    Axios.post("http://localhost:3001/login", {
      user: user,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.auth) {
        if (response.data.result[0][0].idunidad != 0) {
          setLoginStatus(response.data.result[0][0]);
          localStorage.setItem("token", response.data.token);
          mostrarP(user);
          history("/dashboard");
        } else {
          history("/");
        }
      }
    });
  };

  mostrarP(usuariojefe);

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

  //se setean estados que funcionan como condicionales para "prender y apagar" los distintos modales de la aplicación

  const [openModal, setOpenModal] = React.useState(false);
  const [openModalEditar, setOpenModalEditar] = React.useState(false);
  const [openModalEstado, setOpenModalEstado] = React.useState(false);
  const [openModalVerMas, setOpenModalVerMas] = React.useState(false);
  const [openModalAnular, setOpenModalAnular] = React.useState(false);

  const [openModalNombre, setNombre] = React.useState(false);
  const [openModalFI, setFI] = React.useState(false);
  const [openModalFF, setFF] = React.useState(false);

  //función que carga los estados en las interfaces cuando se abre algún modal que los utilice

  if (openModal) {
    Axios.get("http://localhost:3001/api/get/es").then((response) => {
      setEstados(response.data);
    });
  }

  if (openModalEditar) {
    Axios.post("http://localhost:3001/api/postE", {
      estado: proyectoSelec.idEstado,
    }).then((response) => {
      setEstados(response.data);
    });
  }

  // crea un nuevo objeto `Date`
  var today = new Date();

  // obtener la fecha de hoy en formato `MM/DD/YYYY`
  var fecha1 = today.toLocaleDateString("en-US");
  var fecha2 = moment(fecha1).add(7, "days");
  var fechaHoy = moment(fecha1).format("YYYY-MM-DD");
  var fechaFinal = moment(fecha2).format("YYYY-MM-DD");

  //se crea un arreglo llamado proyectos buscados para que guarde los proyectos que tengan coincidencia con la busqueda
  //del proyecto realizado por el usuario, este arreglo será lo que se imprima

  let proyectosBuscados = [];
  //se extrae el número de proyectos del arreglo para imprimirlo en pantalla

  let proyectosTotal = proyectos.length;

  //paginación
  const [currentPage, setCurrentPage] = React.useState(0);

  const proyectosFiltrados = () => {
    return proyectosBuscados.slice(currentPage, currentPage + 5);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 5);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 5);
  };

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
    Axios.post("http://localhost:3001/api/insert", {
      nombreProyecto: nombre,
      fechaRegProyecto: fechaCreacion,
      fechaIniProyecto: fechaInicio,
      fechaFinProyecto: fechaFin,
      descripcion: descripcion,
      estado: estado,
      idUnidadP: unidadid,
    });
  };

  //función para editar proyectos, utiliza el valor del proyecto seleccionado para modificarlo
  const editarProyecto = (
    id,
    nombre,
    fechaInicio,
    fechaFin,
    fechaCreacion,
    estado,
    descripcion
  ) => {
    Axios.put("http://localhost:3001/api/edit", {
      nombreProyecto: nombre,
      fechaRegProyecto: fechaCreacion,
      fechaIniProyecto: fechaInicio,
      fechaFinProyecto: fechaFin,
      descripcion: descripcion,
      estado: estado,
      idProyecto: id,
    });
    mostrarP(loginStatus.nombreUsu);
  };

  //en el caso que se presionen las flechas para ordenar los proyectos, las siguientes funciones los ordenan

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
    proyectosBuscados = proyectos.filter((proyecto) => {
      const proyectoEstado = proyecto.estado;
      return proyectoEstado.includes(estadoSelec);
    });
  }

  const [NombreSelec, setNombreSelec] = React.useState(false);

  if (NombreSelec === "ascen") {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.nombre < b.nombre) return -1;
      if (a.nombre > b.nombre) return 1;
      return 0;
    });
  } else if (NombreSelec === "descen") {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.nombre < b.nombre) return 1;
      if (a.nombre > b.nombre) return -1;
      return 0;
    });
  } else {
    proyectosBuscados = proyectosBuscados;
  }

  const [FiSelec, setFISelec] = React.useState(false);

  if (FiSelec === "ascen") {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.fechaInicio < b.fechaInicio) return 1;
      if (a.fechaInicio > b.fechaInicio) return -1;
      return 0;
    });
  } else if (FiSelec === "descen") {
    proyectosBuscados = proyectos.sort(function (a, b) {
      if (a.fechaInicio < b.fechaInicio) return -1;
      if (a.fechaInicio > b.fechaInicio) return 1;
      return 0;
    });
  } else {
    proyectosBuscados = proyectosBuscados;
  }

  //función que realiza una consulta utilizando el nombre del proyecto clickado para mostrarlo después en un interfaz

  const mostrarProyecto = (text) => {
    const proyectoIndex = proyectosBuscados.findIndex(
      (proyecto) => proyecto.idproyecto === text
    );
    setProyectoSelec(proyectosBuscados[proyectoIndex]);
  };

  let proyectosBTotal = proyectosBuscados.length;

  //función para anular proyecto
  const anularProyecto = (id, razon) => {
    Axios.put("http://localhost:3001/api/anul", {
      idProyecto: id,
      razon: razon,
    });
    mostrarP(loginStatus.nombreUsu);
  };

  // todo lo que se exporta de la aplicación para que la vista y los componentes lo consuman y puedan cambiarlo
  return (
    <POContext.Provider
      value={{
        Login,
        //valores
        unidad,
        jefeUnidad,
        fechaHoy,
        fechaFinal,
        proyectosTotal,
        proyectosBuscados,
        estados,
        proyectosBTotal,
        setProyectos,
        proyectosFiltrados,
        //busqueda
        searchValue,
        setSearchValue,
        currentPage,
        nextPage,
        prevPage,

        //seleccionados
        proyectoSelec,
        estadoSelec,
        setNombreSelec,
        setEstadoSelec,
        FiSelec,
        setFISelec,

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

        openModalNombre,
        setNombre,
        openModalFI,
        setFI,
        setFF,
        openModalFF,

        setFF,
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
        logout,

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
