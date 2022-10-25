import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./grafica.css";
function Grafica() {
  const {
    proyectosTotal,
    proyectosActivosValue,
    proyectosCerradosValue,
    proyectosAnuladosValue,
    proyectosCanceladosValue,
    proyectosSuspendidosValue,
  } = React.useContext(POContext);
  return (
    <React.Fragment>
      <div className="grafica">
        <p>Tienes {proyectosTotal} proyectos.</p>

        <div className="proyectos">
          <p>{proyectosActivosValue} proyectos Activos</p>
          <p>{proyectosCerradosValue} proyectos Cerrados</p>
          <p>{proyectosAnuladosValue} proyectos Anulados</p>
          <p>{proyectosCanceladosValue} proyectos Cancelados</p>
          <p>{proyectosSuspendidosValue} proyectos Suspendidos</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Grafica };
