import React from "react";
import "./listaProyectoOperativo.css";
import { POContext } from "../../../controlador/controlador";

function ListaProyectoOperativo(props) {
  const { unidad } = React.useContext(POContext);

  return (
    <section className="listaProyectoOperativo">
      <h1>Proyectos operativos de la {unidad}</h1>

      <div className="tituloListas">
      <p>Nombre</p>
      <p>Fecha de inicio</p>
      <p>Fecha de finalización</p>
      <p>Estado</p>
      <p>Editar</p>
      <p>Ver más</p>
      <p>Anular</p>
     
      </div>
      <ul>{props.children}</ul>
    </section>
  );
}

export { ListaProyectoOperativo };
