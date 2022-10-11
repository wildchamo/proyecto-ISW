import React from "react";
import "./filtros.css";
import filtro from "./filtro.png";
import arriba from "./vectorArriba.png";
import abajo from "./vectorAbajo.png";

function Filtros(props) {
  const onClickButtonDes = () => {
    props.ordenarArregloDes(true);
  };
  const onClickButtonAsc = () => {
    props.ordenarArregloAsc(true);

  };
  return (
    <div className="tituloListas">
      <div>
        <p>Nombre</p>
        <div className="flechas">
          <img
            onChange={onClickButtonAsc}
            onClick={onClickButtonAsc}
            className="flecha"
            src={arriba}
            alt="Logo"
          />
          <img
            onChange={onClickButtonDes}
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
          <img className="flecha" src={arriba} alt="Logo" />
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
        <p>Estado</p> <img className="filtro" src={filtro} alt="Logo" />
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
