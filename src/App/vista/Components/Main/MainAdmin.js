import React from "react";
import { ListaUnidades } from "../listaUnidades/listaUnidades";
import { Unidad } from "../unidad/unidad.js";
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
              key={unidad.ID}
              nombre={unidad.nombre}
              jefeUnidad={unidad.jefeUnidad}
              prueba={index}
            />
          ))}
        </ListaUnidades>
      </section>
    </main>
  );
}

export { MainAdmin };