import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./FormularioSelecEstado.css";

function FormularioSelecEstado() {
  const { setOpenModalEstado, estadoSelec, setEstadoSelec } =
    React.useContext(POContext);

  const onCancel = () => {
    setOpenModalEstado(false);
  };

  const onClickR = (event) => {
    setEstadoSelec(event.target.value);
    setOpenModalEstado(false);
  };

  return (
    <div className="FormularioSelecEstado">
      <h2>Filtrar por estado:</h2>
      <div className="radio">
        <input type="radio" value="" />
        <label>Sin filtro</label>
      </div>
      <div className="radio">
        <input type="radio" value="Activo" onClick={onClickR} />
        <label>Activo</label>
      </div>
      <div className="radio">
        <input type="radio" value="Cerrado" />
        <label>Cerrado</label>
      </div>
      <div className="radio">
        <input type="radio" value="Anulado" />
        <label>Anulado</label>
      </div>
      <div className="radio">
        <input type="radio" value="Cancelado" />
        <label>Cancelado</label>
      </div>
      <div className="radio">
        <input type="radio" value="Suspendido" />
        <label>Suspendido</label>
      </div>

      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
}
export { FormularioSelecEstado };
