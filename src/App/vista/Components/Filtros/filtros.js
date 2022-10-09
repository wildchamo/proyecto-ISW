import React from "react";
import "./filtros.css";
import { POContext } from "../../../controlador/controlador";

function Filtros() {
  const {} = React.useContext(POContext);
  return (
    <div className="tituloListas">
      <p>Nombre</p>
      <p>Fecha de inicio</p>
      <p>Fecha de finalización</p>
      <p>Estado</p>
      <p>Editar</p>
      <p>Ver más</p>
      <p>Anular</p>
    </div>
  );
}
export { Filtros };
