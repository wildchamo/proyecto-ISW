import React, { useState } from "react";
import logouao from "./logouao.png";
import opmanager from "./opmanager.png";
import trabajo from "./trabajo.png";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { POContext } from "../../../controlador/controlador";
import "./login.css";

const Login = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const {Login}=React.useContext(POContext)

  const history = useNavigate();

  const Log = (event) => {
    event.preventDefault();
    Login(user,password)

    //     try {
    //       await axios.post("http://localhost:5000/login", {
    //         email: email,
    //         password: password,
    //       });
    // if (user === "cparra" && password === "1234") {
    // }

    //     } catch (error) {
    //       if (error.response) {
    //         setMsg(error.response.data.msg);
    //       }
    //     }
  };
  {
  }

  return (
    <React.Fragment>
      <div className="contenedorLogin1">
        <div className="contenedorLogin">
          <div>
            <img src={opmanager} alt="Logo" />
          </div>

          <form onSubmit={Log}>
            <label className="label">Nombre de usuario</label>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Nombre de usuario"
                value={user}
                onChange={(e) => {setUser(e.target.value)}}
              />
            </div>

            <label className="label">Contraseña</label>
            <div>
              <input
                type="password"
                className="input"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </div>
            <div className="btn">
              <button>Iniciar sesión</button>
            </div>
          </form>
          <div>
            <img src={logouao} />
          </div>
        </div>
        <img className="imgTrabajo" src={trabajo} />
      </div>
    </React.Fragment>
  );
};

export { Login };
