import React from "react";
import "./proyectoOperativo.css";
import { Modal } from "../modal/modal";
import { FormularioPOver } from "../FormularioPOver/formularioPOver";

import { POContext } from "../../../controlador/controlador";

import anular from "./anular.png";
import editar from "./editar.png";
import ver from "./ver.png";

function ProyectoOperativo(props) {
  const {
    setOpenModalEditar,
    setOpenModalVerMas,
    openModalVerMas,
    openModalEditar,
  } = React.useContext(POContext);

  const editarPO = () => {
    setOpenModalEditar(true);
  };
  const verMasPO = () => {
    setOpenModalVerMas(true);
    console.log(props);
  };
  const anularPO = () => {
    //falta
  };

  return (
    <React.Fragment>
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
      {openModalEditar && <Modal>holaaa</Modal>}
      {openModalVerMas && (
        <Modal>
          <FormularioPOver
            key={props.nombre}
            nombre={props.nombre}
            fechaInicio={props.fechaInicio}
            fechaFin={props.fechaFin}
            fechaCreacion={props.fechaCreacion}
            estado={props.estado}
            descripcion={props.descripcion}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}
export { ProyectoOperativo };
