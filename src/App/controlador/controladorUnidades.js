import React, { useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultUnidades = [
  {
    ID: 1,
    nombre: "Uao virtual",
    jefeUnidad: "Jhon Cortes",
  },
  {
    ID: 2,
    nombre: "hardware",
    jefeUnidad: "Jose Luis",
  },
  {
    ID: 3,
    nombre: "software",
    jefeUnidad: "Gabriela",
  },
];

//creación del context
const UOContext = React.createContext();

function UOProvider(props) {
  //seteamos los estados necesarios para la implementación del proyecto, los estados cambian según las
  //interacciones que realice el usuario con el componente vista
  const history = useNavigate();

  //cargamos la lista de proyectos en un estado
  const [unidades, setUnidades] = React.useState(defaultUnidades);
  console.log(unidades);
  const [loginStatus, setLoginStatus] = React.useState({});

  //datos generales de la sesión
  let admin = loginStatus.nombre;
  let usuarioadmin = loginStatus.nombreUsu;

  Axios.defaults.withCredentials = true;

  //función para deslogearse
  const Logout = () => {
    setLoginStatus({});
    setUnidades([]);
    // history("/");
  };

  //función para logearse en la app que se conecta con el modelo
  const Login = (user, password) => {
    Axios.post("http://localhost:3001/loginAdmin", {
      user: user,
      password: password,
    }).then((response) => {
      if (response.data.auth) {
        setLoginStatus(response.data.result[0]);
        localStorage.setItem("token", response.data.token);
        // mostrarP(user);
        history("/dashboardAdmin");
      }
    });
  };

  //lista de jefes unidad sin unidad asociada
  const [jefes, setJefes] = React.useState([]);

  //para mostrar un proyecto en especifico es necesario extraer sus datos, por tanto se encapsula temporalmente en el estado
  //proyectoSelect
  const [unidadSelect, setUnidadSelect] = React.useState();

  //se setean estados que funcionan como condicionales para "prender y apagar" los distintos modales de la aplicación

  const [openModalCrear, setOpenModalCrear] = React.useState(false);
  const [openModalEditar, setOpenModalEditar] = React.useState(false);

  //función que carga los estados en las interfaces cuando se abre algún modal que los utilice

  if (openModalCrear || openModalEditar) {
    Axios.get("http://localhost:3001/api/get/jefes").then((response) => {
      setJefes(response.data);
    });
  }

  var fechaHoy = new Date();
  var dd = String(fechaHoy.getDate()).padStart(2, "0");
  var mm = String(fechaHoy.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = fechaHoy.getFullYear();

  fechaHoy = yyyy + "-" + mm + "-" + dd;

  //función para agregar unidades
  const agregarUnidad = (nombre, jefe) => {
    Axios.post("http://localhost:3001/api/insert", {
      nombreUnidad: nombre,
      fechaRegUnidad: fechaHoy,
      jefeUnidad: jefe,
    });
  };

  const mostrarUnidad = (text) => {
    const unidadIndex = unidades.findIndex((unidad) => unidad.ID === text);
    setUnidadSelect(unidades[unidadIndex]);
  };

  //función para editar proyectos, utiliza el valor del proyecto seleccionado para modificarlo

  //función para anular proyecto
  const editarUnidad = (id, nombreUnidad, jefeUnidad) => {
    Axios.put("http://localhost:3001/api/putUni", {
      idUnidad: id,
      nombreUnidad: nombreUnidad,
      jefeUnidad: jefeUnidad,
    });
  };

  return (
    <UOContext.Provider
      value={{
        unidades,
        admin,
        Login,
        Logout,
        jefes,
        unidadSelect,
        openModalCrear,
        setOpenModalCrear,
        mostrarUnidad,
        openModalEditar,
        setOpenModalEditar,
        fechaHoy,
        agregarUnidad,
        editarUnidad,
      }}
    >
      {props.children}
    </UOContext.Provider>
  );
}

export { UOContext, UOProvider };
