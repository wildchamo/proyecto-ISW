import React from "react";
import "./listaProyectoOperativo.css";
import { POContext } from "../../../controlador/controlador";
import { Filtros } from "../Filtros/filtros.js";
import { BotonCrearProyecto } from "../BotonCrearProyecto/BotonCrearProyecto";
import { Paginacion } from "../paginacion/paginacion";

function ListaProyectoOperativo(props) {
  const {
    unidad,
    setOpenModal,
    setOrdenarArregloDes,
    setOrdenarArregloAsc,
    setOrdenarArregloAscFI,
    setOrdenarArregloDesFI,
    setOrdenarArregloAscFF,
    setOrdenarArregloDesFF,
    proyectosTotal,
    proyectosBTotal,
  } = React.useContext(POContext);

  return (
    <section className="listaProyectoOperativo">
      <h1>Proyectos operativos de la {unidad}</h1>
      <Filtros
        ordenarArregloDes={setOrdenarArregloDes}
        ordenarArregloAsc={setOrdenarArregloAsc}
        ordenarArregloDesFI={setOrdenarArregloDesFI}
        ordenarArregloAscFI={setOrdenarArregloAscFI}
        ordenarArregloDesFF={setOrdenarArregloDesFF}
        ordenarArregloAscFF={setOrdenarArregloAscFF}
      />
      <ul>{props.children}</ul>
      <div className="footer">
        <p>
          Mostrando {proyectosBTotal} de {proyectosTotal} proyectos
        </p>
        <Paginacion></Paginacion>
        <BotonCrearProyecto setOpenModal={setOpenModal} />
      </div>
    </section>
  );
}

export { ListaProyectoOperativo };
