import React from "react";
import { ListaProyectoOperativo } from "./Components/listaProyectoOperativo/listaProyectoOperativo.js";
import { Header } from "./Components/Header/header";
import { ProyectoOperativo } from "./Components/proyectoOperativo/proyectoOperativo.js";
import { POContext } from "../controlador/controlador";
import { Modal } from "./Components/modal/modal";
import { FormularioPO } from "./Components/formularioPO/formularioPO.js";
import { FormularioPOver } from "./Components/FormularioPOver/formularioPOver.js";

function AppUI() {
  const { proyectosBuscados, openModal, openModalEditar, openModalVerMas } =
    React.useContext(POContext);
  return (
    <React.Fragment>
      <Header />
      <ListaProyectoOperativo>
        {proyectosBuscados.map((proyecto) => (
          <ProyectoOperativo
            key={proyecto.nombre}
            nombre={proyecto.nombre}
            fechaInicio={proyecto.fechaInicio}
            fechaFin={proyecto.fechaFin}
            fechaCreacion={proyecto.fechaCreacion}
            estado={proyecto.estado}
            descripcion={proyecto.descripcion}
          />
        ))}
      </ListaProyectoOperativo>
      {openModal && (
        <Modal>
          <FormularioPO />
        </Modal>
      )}
      {openModalEditar && <Modal>holaaa</Modal>}
      {openModalVerMas && <Modal><FormularioPOver/></Modal>}
    </React.Fragment>
  );
}

export { AppUI };
