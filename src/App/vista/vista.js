import React from "react";
import { ListaProyectoOperativo } from "./Components/listaProyectoOperativo/listaProyectoOperativo.js";
import { Header } from "./Components/Header/header";
import { ProyectoOperativo } from "./Components/proyectoOperativo/proyectoOperativo.js";
import { BusquedaProyecto } from "./Components/BusquedaProyecto/BusquedaProyecto.js";
import { POContext } from "../controlador/controlador";
function AppUI() {
  const { proyectosBuscados } = React.useContext(POContext);
  return (
    <React.Fragment>
      <Header/>
      
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
    </React.Fragment>
  );
}

export { AppUI };
