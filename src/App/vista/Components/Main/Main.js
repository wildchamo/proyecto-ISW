import React from "react";
import { ListaProyectoOperativo } from "../listaProyectoOperativo/listaProyectoOperativo.js";
import { ProyectoOperativo } from "../proyectoOperativo/proyectoOperativo.js";
import { Grafica } from "../Grafica/Grafica.js";
import { POContext } from "../../../controlador/controlador";
import "./main.css";
function Main() {
  const {
    proyectosBuscados,
    anularProyecto,
    mostrarProyecto,
  } = React.useContext(POContext);
  return (
    <main>
        <section>
          <ListaProyectoOperativo>
            {proyectosBuscados.map((proyecto, index) => (
              <ProyectoOperativo
                key={proyecto.ID}
                ID={proyecto.ID}
                nombre={proyecto.nombre}
                fechaInicio={proyecto.fechaInicio}
                fechaFin={proyecto.fechaFin}
                fechaCreacion={proyecto.fechaCreacion}
                estado={proyecto.estado}
                descripcion={proyecto.descripcion}
                prueba={index}
                motivoCancelacion={proyecto.motivoCancelacion}
                onAnular={() => anularProyecto(proyecto.ID)}
                onMostrar={() => mostrarProyecto(proyecto.ID)}
              />
            ))}
          </ListaProyectoOperativo>
        </section>
        <Grafica />
    </main>
  );
}

export { Main };
