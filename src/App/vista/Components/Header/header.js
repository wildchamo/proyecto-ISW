import React from "react";
import { BusquedaProyecto } from "../BusquedaProyecto/BusquedaProyecto";
import "./header.css";
import logoSencillo from "./logosencillo.png";
import foto from "./foto.png";
import salir from "./salir.png";
import { POContext } from "../../../controlador/controlador";

function Header() {
  const { jefeUnidad, logout } = React.useContext(POContext);

  const logoutt = async (e) => {
    logout();
  };

  return (
    <header className="box">
      <div className="logoSencillo">
        <img className="logoSencillo" src={logoSencillo} alt="Logo" />
      </div>
      <h1>¡Bienvenido, {jefeUnidad}!</h1>
      <BusquedaProyecto/>
      <div className="foto">
        <img className="foto" src={foto} alt="Foto de usuario" />
      </div>
      <div className="salir">
      <image>
          <img className="salir" src={salir} alt="Cerrar sesión" onClick={logoutt}/>
          <tool-tip role="tooltip">Cerrar sesión</tool-tip>
        </image>
      </div>
    </header>
  );
}
export { Header };
