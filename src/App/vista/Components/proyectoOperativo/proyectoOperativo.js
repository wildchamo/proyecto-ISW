import React from "react";
import "./proyectoOperativo.css";
import { Modal } from "../modal/modal";

import { POContext } from "../../../controlador/controlador";

import anular from "./anular.png";
import editar from "./editar.png";
import ver from "./ver.png";

function ProyectoOperativo(props) {
  const {
    openModalEditar,
    setOpenModalEditar,
    openModalVerMas,
    setOpenModalVerMas,
  } = React.useContext(POContext);

  const editarPO = () => {
    alert("Borraste el todo " + props.text);
    setOpenModalEditar(true);
  };
  const verMasPO = () => {
    alert("Borraste el todo " + props.text);
    setOpenModalVerMas(true);
  };
  const anularPO = () => {
    alert("Borraste el todo " + props.text);
  };

  return (
    <li className="proyectoOperativo">
      <p>{props.nombre}</p>
      <p>{props.fechaInicio}</p>
      <p>{props.fechaFin}</p>
      <p>● {props.estado}</p>
      <p onClick={editarPO}>
        <img src={editar} alt="botón editar" />
      </p>
      <p onClick={verMasPO}>
        <img src={ver} alt="botón ver más" />
      </p>
      <p onClick={anularPO}>
        <img src={anular} alt="botón anular" />
      </p>
    </li>
  );
}
export { ProyectoOperativo };
