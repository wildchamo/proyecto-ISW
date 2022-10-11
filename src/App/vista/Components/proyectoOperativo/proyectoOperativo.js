import React from "react";
import "./proyectoOperativo.css";
import { Modal } from "../modal/modal";
import { FormularioPOver } from "../FormularioPOver/formularioPOver";
import { FormularioPOedit } from "../formularioPOedit/formularioPOedit";

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
    mostrarProyecto
  } = React.useContext(POContext);

  const editarPO = () => {
    setOpenModalEditar(true);
  };
  const verMasPO = () => {
    setOpenModalVerMas(true);
    mostrarProyecto(props.nombre)
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
        <p onClick={props.onAnular}>
          <img src={anular} alt="botón anular" />
        </p>
      </li>
      {openModalEditar && (
        <Modal>
          <FormularioPOedit />
        </Modal>
      )}
      {openModalVerMas && (
        <Modal>
          <FormularioPOver
            key={props.key}
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
