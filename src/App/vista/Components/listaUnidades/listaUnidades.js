import React from "react";
import "./listaProyectoOperativo.css";
import { UOContext } from "../../../controlador/controladorUnidades";
import { BotonCrearProyecto } from "../BotonCrearProyecto/BotonCrearProyecto";

function ListaUnidades(props) {
  const {unidades} = React.useContext(UOContext);

  return (
    <section className="listaProyectoOperativo">
      <h1>Unidades Operativas de la DTI</h1>

      <ul>{props.children}</ul>
      <div className="footer">

      </div>
    </section>
  );
}

export { ListaUnidades };
