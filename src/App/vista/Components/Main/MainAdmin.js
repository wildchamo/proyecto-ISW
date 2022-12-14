import React from "react";
import { ListaUnidades } from "../admin/listaUnidades/listaUnidades";
import { Unidad } from "../admin/unidad/unidad.js";
import { UOContext } from "../../../controlador/controladorUnidades";
import "./main.css";

function MainAdmin() {
  const { unidades } = React.useContext(UOContext);
  return (
    <main>
      <section>
        <ListaUnidades>
          {unidades.map((unidad, index) => (
            <Unidad
              key={index}
              idunidad={unidad.idunidad}
              nombre={unidad.nombreUnidad}
              jefeUnidad={unidad.nombre}
              prueba={index}
            />
          ))}
        </ListaUnidades>
      </section>
    </main>
  );
}

export { MainAdmin };
