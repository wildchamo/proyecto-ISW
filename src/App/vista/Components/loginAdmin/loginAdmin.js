import React, { useState } from "react";
import logouao from "./logouao.png";
import opmanager from "./opmanager.png";
import trabajo from "./trabajo.png";
import { UOContext } from "../../../controlador/controladorUnidades";
import "./login.css";

const LoginAdmin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = React.useContext(UOContext);

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
          <p>panel admin </p>
          <form onSubmit={Log}>
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

export { LoginAdmin };
