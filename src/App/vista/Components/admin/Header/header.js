import React from "react";
import { BusquedaProyecto } from "../../BusquedaProyecto/BusquedaProyecto";
import "./header.css";
import logoSencillo from "./logosencillo.png";
import campana from "./campana.png";
import foto from "./foto.png";
import salir from "./salir.png";
import { UOContext } from "../../../../controlador/controladorUnidades";

function Header() {
  const { admin, logout } = React.useContext(UOContext);

  const logoutt = async (e) => {
    logout();
  };

  return (
    <header className="box">
      <div className="logoSencillo">
        <img className="logoSencillo" src={logoSencillo} alt="Logo" />
      </div>
      <h1>¡Bienvenido, {admin} !</h1>
      <BusquedaProyecto />
      <div className="campana">
        <img
          className="campana"
          src={campana}
          alt="Campana para notificación"
        />
      </div>
      <div className="foto">
        <img className="foto" src={foto} alt="Foto de usuario" />
      </div>
      <div className="salir">
        <img
          className="salir"
          src={salir}
          alt="Cerrar sesión"
          onClick={logoutt}
        />
      </div>
    </header>
  );
}
export { Header };
