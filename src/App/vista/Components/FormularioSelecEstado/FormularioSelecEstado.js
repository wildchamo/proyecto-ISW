import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./FormularioSelecEstado.css";

function FormularioSelecEstado() {
  const { setOpenModalEstado, estadoSelec, estados } =
    React.useContext(POContext);

  const onCancel = () => {
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
        <input type="radio" value="Activo" />
        <label for="Activo">Activo</label>
      </div>
      <div className="radio">
        <input type="radio" value="Cerrado" />
        <label for="Cerrado">Cerrado</label>
      </div>
      <div className="radio">
        <input type="radio" value="Anulado" />
        <label for="Anulado">Anulado</label>
      </div>
      <div className="radio">
        <input type="radio" value="Cancelado" />
        <label for="Cancelado">Cancelado</label>
      </div>
      <div className="radio">
        <input type="radio" value="Suspendido" />
        <label for="Suspendido">Suspendido</label>
      </div>

      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
}
export { FormularioSelecEstado };
