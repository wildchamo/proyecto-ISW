import React from "react";
import "./proyectoOperativo.css";
import { Modal } from "../modal/modal";
import { FormularioPOver } from "../FormularioPOver/formularioPOver";
import { FormularioPOedit } from "../formularioPOedit/formularioPOedit";
import { FormularioPOanular } from "../formularioPOanular/formularioPOanular";

import { POContext } from "../../../controlador/controlador";

import anular from "./anular.png";
import editar from "./editar.png";
import ver from "./ver.png";

function ProyectoOperativo(props) {
  const {
    openModalAnular,
    setOpenModalAnular,
    setOpenModalEditar,
    setOpenModalVerMas,
    openModalVerMas,
    openModalEditar,
    mostrarProyecto,
  } = React.useContext(POContext);

  const editarPO = () => {
    setOpenModalEditar(true);
    mostrarProyecto(props.idproyecto);
  };
  const verMasPO = () => {
    setOpenModalVerMas(true);
    mostrarProyecto(props.idproyecto);
  };

  const anularPO = () => {
    setOpenModalAnular(true);
    mostrarProyecto(props.idproyecto);
  };

  return (
    <React.Fragment>
       <li className="proyectoOperativo">
        <p>{props.nombre}</p>
        <p>{props.fechaInicio}</p>
        <p>{props.fechaFin}</p>
        <p className={`estado-p ${props.estado==="Activo"&& 'estado-p--activo'} `}>● {props.estado}</p>
        <p onClick={editarPO}>
          <img src={editar} alt="botón editar" />
        </p>
        <p onClick={verMasPO}>
          <img src={ver} alt="botón ver más" />
        </p>
        {/* <p onClick={props.onAnular}> */}
        <p onClick={anularPO}>
          <img src={anular} alt="botón anular" />
        </p>
        <p></p>
      </li>
      {openModalEditar && (
        <Modal>
          <FormularioPOedit />
        </Modal>
      )}
      {openModalVerMas && (
        <Modal>
          <FormularioPOver />
        </Modal>
      )}

      {openModalAnular && (
        <Modal>
          <FormularioPOanular />
        </Modal>
      )}
    </React.Fragment>
  );
}
export { ProyectoOperativo };
