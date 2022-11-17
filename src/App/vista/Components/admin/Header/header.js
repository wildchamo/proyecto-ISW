import React from "react";
import "./headerA.css";
import logoSencillo from "./logosencillo.png";
import salir from "./salir.png";
import { UOContext } from "../../../../controlador/controladorUnidades";

function Header() {
  const { admin, Logout } = React.useContext(UOContext);

  const logoutt = async (e) => {
    Logout();
  };

  return (
    <header className="box1">
      <div className="logoSencillo"> 
        <img className="logoSencillo" src={logoSencillo} alt="Logo" />
      </div>
      <h1>¡Bienvenido, {admin}!</h1>
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
