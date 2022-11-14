import React from "react";
import "./unidadOperativa.css";
import editar from "./editar.png";
import { UOContext } from "../../../../controlador/controladorUnidades";
import {FormularioUOedit} from "../formularioUOedit/formularioUO";
import {Modal} from "../../modal/modal"

function Unidad(props) {
  const {setOpenModalEditar, openModalEditar, mostrarUnidad } =
    React.useContext(UOContext);

  const editarU = () => {
    setOpenModalEditar(true);
    mostrarUnidad(props.ID);
  };

  return (
    <React.Fragment>
      <li className="unidadOperativa">
        <p>{props.nombre}</p>
        <p>{props.jefeUnidad}</p>
        <p>
          <img src={editar} onClick={editarU} alt="botón editar" />
        </p>
      </li>
      {openModalEditar && (
        <Modal>
          <FormularioUOedit />
        </Modal>
      )}
    </React.Fragment>
  );
}
export { Unidad };
