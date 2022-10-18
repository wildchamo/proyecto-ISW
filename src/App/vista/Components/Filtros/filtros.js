import React from "react";
import "./filtros.css";
import filtro from "./filtro.png";
import arriba from "./vectorArriba.png";
import abajo from "./vectorAbajo.png";
import { Modal } from "../modal/modal";
import { FormularioSelecEstado } from "../FormularioSelecEstado/FormularioSelecEstado";
import { POContext } from "../../../controlador/controlador";

function Filtros(props) {
  const { openModalEstado, setOpenModalEstado } = React.useContext(POContext);

  const onClickButtonDes = () => {
    props.ordenarArregloDes(true);
  };
  const onClickButtonAsc = () => {
    props.ordenarArregloAsc(true);
  };
  const onClickButtonAscFI = () => {
    props.ordenarArregloAscFI(true);
  };

  const onClickModalEstado = () => {
    setOpenModalEstado(true);
  };

  return (
    <div className="tituloListas">
      {openModalEstado && <Modal><FormularioSelecEstado/></Modal>}
      <div>
        <p>Nombre</p>
        <div className="flechas">
          <img
            onClick={onClickButtonAsc}
            className="flecha"
            src={arriba}
            alt="Logo"
          />
          <img
            onClick={onClickButtonDes}
            className="flecha"
            src={abajo}
            alt="Logo"
          />
        </div>
      </div>

      <div>
        <p>Fecha de inicio</p>
        <div className="flechas">
          <img
            className="flecha"
            onClick={onClickButtonAscFI}
            src={arriba}
            alt="Logo"
          />
          <img className="flecha" src={abajo} alt="Logo" />
        </div>
      </div>

      <div>
        <p>fecha de finalización</p>
        <div className="flechas">
          <img className="flecha" src={arriba} alt="Logo" />
          <img className="flecha" src={abajo} alt="Logo" />
        </div>
      </div>

      <div>
        <p>Estado</p>{" "}
        <img
          className="filtro"
          onClick={onClickModalEstado}
          src={filtro}
          alt="Logo"
        />
      </div>
      <div>
        <p>Editar</p>
      </div>
      <div>
        <p>Ver más</p>
      </div>
      <p>Anular</p>
    </div>
  );
}
export { Filtros };
