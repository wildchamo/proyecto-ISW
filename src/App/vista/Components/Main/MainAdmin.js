import React from "react";
import { ListaUnidades } from "../listaUnidades/listaUnidades";
import { Unidad } from "../unidad/unidad.js";
import { Grafica } from "../Grafica/Grafica.js";
import { UOContext } from "../../../controlador/controladorUnidades";
import "./main.css";
function MainAdmin() {
  const {
    unidades
  } = React.useContext(UOContext);
  return (
    <main>
        <section>
          <ListaUnidades>
            {unidades.map((unidad,index)=>(
              <Unidad>
                key={unidad.ID}
                nombre={unidad.nombre}
                jefeUnidad={unidad.jefeUnidad}
              </Unidad>
            ))}
          </ListaUnidades>
        </section>
        <Grafica />
    </main>
  );
}

export { MainAdmin };
