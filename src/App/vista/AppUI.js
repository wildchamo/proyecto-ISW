import React from "react";
import { ListaProyectoOperativo } from "./Components/listaProyectoOperativo/listaProyectoOperativo.js";
import { ProyectoOperativo } from "./Components/proyectoOperativo/proyectoOperativo.js";
import { BusquedaProyecto } from "./Components/BusquedaProyecto/BusquedaProyecto.js";
import { POContext } from "../controlador/controlador";
function AppUI() {
  return (
    <React.Fragment>
      <BusquedaProyecto />

      <POContext.Consumer>
        {({ proyectosBuscados }) => (
          <ListaProyectoOperativo>
            {proyectosBuscados.map((proyecto) => (
              <ProyectoOperativo
                key={proyecto.nombre}
                nombre={proyecto.nombre}
                fechaInicio={proyecto.fechaInicio}
                fechaFin={proyecto.fechaFin}
                fechaCreación={proyecto.fechaCreacion}
                estado={proyecto.estado}
                descripción={proyecto.descripción}
              />
            ))}
          </ListaProyectoOperativo>
        )}
      </POContext.Consumer>
    </React.Fragment>
  );
}

export { AppUI };
