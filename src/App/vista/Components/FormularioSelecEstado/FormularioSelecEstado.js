import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./FormularioSelecEstado.css";

function FormularioSelecEstado() {
  const { setOpenModalEstado,estadoSelec } =
    React.useContext(POContext);

  const onCancel = () => {
    setOpenModalEstado(false);
  };

  return(
  <form>
    <button type="button" onClick={onCancel}>
      Cancelar
    </button>
  </form>
  )
}
export { FormularioSelecEstado };
