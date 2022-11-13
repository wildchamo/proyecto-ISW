import React from "react";
import "./proyectoOperativo.css";

import editar from "./editar.png";

function Unidad(props) {
  // const editarPO = () => {
  //   setOpenModalEditar(true);
  //   mostrarUnidad(props.ID);
  // };

  return (
    <React.Fragment>
      <li className="proyectoOperativo">
        <p>{props.nombre}</p>
        <p>{props.jefeUnidad}</p>
        <p>
          <img src={editar} alt="botón editar" />
        </p>
      </li>
      {/* {openModalEditar && (
        <Modal>
          <FormularioPOedit />
        </Modal>
      )} */}
    </React.Fragment>
  );
}
export { Unidad };
