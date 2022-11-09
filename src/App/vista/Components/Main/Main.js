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
    mostrarProyecto,proyectosFiltrados,
  } = React.useContext(POContext);
  return (
    <main>
        <section>
          <ListaProyectoOperativo>
            {proyectosFiltrados().map((proyecto, index) => (
              <ProyectoOperativo
                key={proyecto.idproyecto}
                idproyecto={proyecto.idproyecto}
                nombre={proyecto.nombre}
                fechaInicio={proyecto.fechaInicio}
                fechaFin={proyecto.fechaFin}
                fechaCreacion={proyecto.fechaCreacion}
                estado={proyecto.estado}
                descripcion={proyecto.descripcion}
                prueba={index}
                motivoCancelacion={proyecto.motivoCancelacion}
                onAnular={() => anularProyecto(proyecto.idproyecto)}
                onMostrar={() => mostrarProyecto(proyecto.idproyecto)}
              />
            ))}
          </ListaProyectoOperativo>
        </section>
        <Grafica />
    </main>
  );
}

export { Main };
