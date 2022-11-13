import React from "react";
import "./headerA.css";
import logoSencillo from "./logosencillo.png";
import salir from "./salir.png";
import { UOContext } from "../../../../controlador/controladorUnidades";

function Header() {
  const { admin, logout } = React.useContext(UOContext);

  const logoutt = async (e) => {
    logout();
  };

  return (
    <header className="box1">
     
      <div className="logoSencillo">
        <img className="logoSencillo" src={logoSencillo} alt="Logo" />
      </div>
        <h1>¡Bienvenido, {admin} !</h1>
     

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
