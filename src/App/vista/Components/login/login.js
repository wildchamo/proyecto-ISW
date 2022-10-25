import React, { useState } from "react";
import logouao from "./logouao.png";
import opmanager from "./opmanager.png";
import trabajo from "./trabajo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const history = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    //     try {
    //       await axios.post("http://localhost:5000/login", {
    //         email: email,
    //         password: password,
    //       });
    history("/dashboard");
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

          <form onSubmit={Auth}>
            <label className="label">Nombre de usuario</label>
            <div>
              <input
                type="text"
                className="input"
                placeholder="Nombre de usuario"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            <label className="label">Contraseña</label>
            <div>
              <input
                type="password"
                className="input"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button>Iniciar sesión</button>
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
