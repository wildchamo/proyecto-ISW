import React, { useState } from "react";
import logouao from "./logouao.png";
import opmanager from "./opmanager.png";
import trabajo from "./trabajo.png";
import { POContext } from "../../../controlador/controlador";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { Login,mensajeMalo} = React.useContext(POContext);


  const Log = (event) => {
    event.preventDefault();
    Login(user, password);
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
          {mensajeMalo && (
        <p style={{color:"#9e0b0f"}}> Login invalido, por favor pruebe de nuevo</p>
      )}
            <label className="label">Nombre de usuario</label>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Nombre de usuario"
                value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
            </div>

            <label className="label">Contraseña</label>
            <div>
              <input
                type="password"
                className="input"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
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
