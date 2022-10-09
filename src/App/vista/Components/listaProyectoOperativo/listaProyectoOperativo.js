import React from "react";
import "./listaProyectoOperativo.css";
import { POContext } from "../../../controlador/controlador";
import {Filtros} from "../Filtros/filtros.js";
import {BotonCrearProyecto} from "../BotonCrearProyecto/BotonCrearProyecto";

function ListaProyectoOperativo(props) {
  const { unidad } = React.useContext(POContext);

  return (
    <section className="listaProyectoOperativo">
      <h1>Proyectos operativos de la {unidad}</h1>
      <Filtros/>
      <ul>{props.children}</ul>
      <BotonCrearProyecto/>
    </section>
  );
}

export { ListaProyectoOperativo };
