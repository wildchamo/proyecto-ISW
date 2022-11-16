import React from "react";
import "./listaUnidades.css";
import { UOContext } from "../../../../controlador/controladorUnidades";
import { BotonCrearUnidad } from "../BotonCrearUnidad/BotonCrearUnidad.js";
import {BotonCrearEstado} from "../BotonCrearEstado/BotonCrearUnidad"
function ListaUnidades(props) {
  const {setOpenModalCrear,noUnidades,setOpenModalEstado} = React.useContext(UOContext);

  return (
    <section className="ListaUnidades">
      <h1>Unidades Operativas de la DTI</h1>

      <ul>{props.children}</ul>
      <div className="footer">
        número de unidades: {noUnidades}
        <BotonCrearEstado setOpenModal={setOpenModalEstado} />
        <BotonCrearUnidad setOpenModal={setOpenModalCrear} />
      </div>
    </section>
  );
}

export { ListaUnidades };
