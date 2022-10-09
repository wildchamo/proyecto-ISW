import React from "react";
import "./filtros.css";
import { POContext } from "../../../controlador/controlador";
import filtro from "./filtro.png";
import arriba from "./vectorArriba.png";
import abajo from "./vectorAbajo.png";

function Filtros() {
  const {} = React.useContext(POContext);
  return (
    <div className="tituloListas">
      <div>
        <p>Nombre</p>
        <div className="flechas">
          <img className="flecha" src={arriba} alt="Logo" />
          <img className="flecha" src={abajo} alt="Logo" />
        </div>
      </div>

      <div>
        <p>Fecha de inicio</p>
        <div className="flechas">
          <img className="flecha" src={arriba} alt="Logo" />
          <img className="flecha" src={abajo} alt="Logo" />
        </div>
      </div>

      <div>
        <p>fecha de finalización</p>
        <div className="flechas">
          <img className="flecha" src={arriba} alt="Logo" />
          <img className="flecha" src={abajo} alt="Logo" />
        </div>
      </div>

      <div>
        <p>Estado</p> <img className="filtro" src={filtro} alt="Logo" />
      </div>
    <div>
      <p>Editar</p>
    </div>
    <div>
      <p>Ver más</p>

    </div>
      <p>Anular</p>
    </div>
  );
}
export { Filtros };
