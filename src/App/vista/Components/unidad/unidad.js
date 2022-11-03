import React from "react";
import "./proyectoOperativo.css";
import { Modal } from "../modal/modal";
import { FormularioPOver } from "../FormularioPOver/formularioPOver";
import { FormularioPOedit } from "../formularioPOedit/formularioPOedit";

import { POContext } from "../../../controlador/controlador";

import editar from "./editar.png";
import ver from "./ver.png";

function Unidad(props) {
  const { setOpenModalEditar, openModalEditar, mostrarUnidad } =
    React.useContext(POContext);

  const editarPO = () => {
    setOpenModalEditar(true);
    mostrarUnidad(props.ID);
  };

  return (
    <React.Fragment>
      <li className="proyectoOperativo">
        <p>{props.nombre}</p>
        <p>{props.jefeUnidad}</p>
        <p onClick={editarPO}>
          <img src={editar} alt="botón editar" />
        </p>
      </li>
      {openModalEditar && (
        <Modal>
          <FormularioPOedit />
        </Modal>
      )}
    </React.Fragment>
  );
}
export { Unidad };
