import React from "react";
import { ListaProyectoOperativo } from "./Components/listaProyectoOperativo/listaProyectoOperativo.js";
import { Header } from "./Components/Header/header";
import { ProyectoOperativo } from "./Components/proyectoOperativo/proyectoOperativo.js";
import { POContext } from "../controlador/controlador";
import { Modal } from "./Components/modal/modal";
import { FormularioPO } from "./Components/formularioPO/formularioPO.js";

function AppUI() {
  const { proyectosBuscados, openModal, proyectosTotal, anularProyecto, mostrarProyecto } =
    React.useContext(POContext);
  return (
    <React.Fragment>
      <Header />
      <ListaProyectoOperativo>
        {proyectosBuscados.map((proyecto, index) => (
          <ProyectoOperativo
            key={proyecto.nombre}
            nombre={proyecto.nombre}
            fechaInicio={proyecto.fechaInicio}
            fechaFin={proyecto.fechaFin}
            fechaCreacion={proyecto.fechaCreacion}
            estado={proyecto.estado}
            descripcion={proyecto.descripcion}
            prueba={index}
            onAnular={() => anularProyecto(proyecto.nombre)}
            onMostrar={() => mostrarProyecto(proyecto.nombre)}
          />
        ))}
      </ListaProyectoOperativo>
      <p>total proyecto: {proyectosTotal}</p>

      {openModal && (
        <Modal>
          <FormularioPO />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
