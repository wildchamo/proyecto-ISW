import React from "react";
import { ListaProyectoOperativo } from "./Components/listaProyectoOperativo/listaProyectoOperativo.js";
import { ProyectoOperativo } from "./Components/proyectoOperativo/proyectoOperativo.js";
import { BusquedaProyecto } from "./Components/BusquedaProyecto/BusquedaProyecto.js";

function AppUI({ proyectosTotal, searchValue, setSearchValue,proyectosBuscados }) {
  return (
    <React.Fragment>
      <BusquedaProyecto
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
