import React from "react";
import "./listaUnidades.css";
import { UOContext } from "../../../../controlador/controladorUnidades";
import { BotonCrearUnidad } from "../../BotonCrearUnidad/BotonCrearUnidad.js";

function ListaUnidades(props) {
  const {setOpenModalCrear} = React.useContext(UOContext);

  return (
    <section className="ListaUnidades">
      <h1>Unidades Operativas de la DTI</h1>

      <ul>{props.children}</ul>


      <div className="footer">
        número de unidades
        <BotonCrearUnidad setOpenModal={setOpenModalCrear} />
      </div>
    </section>
  );
}

export { ListaUnidades };
