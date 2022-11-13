import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./FormularioSelecEstado.css";

function FormularioSelecFI() {
  const { setFI, setFISelec } =
    React.useContext(POContext);

  const onCancel = () => {
    setFI(false);
  };

  const onClickR = (event) => {
    setFISelec(event.target.value);
    setFI(false);
  };

  return (
    <div className="FormularioSelecnombre">

      <h2>Ordenar por fecha de inicio de forma:</h2>

      <div className="radio">
        <input type="radio" value="ascen" onClick={onClickR} />
        <label>Ascendente</label>
      </div>
      <div className="radio">
        <input type="radio" value="descen" onClick={onClickR} />
        <label>Descendente</label>
      </div>
      <div className="radio">
        <input type="radio" value="" onClick={onClickR} />
        <label>Sin filtro</label>
      </div>

      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
}
export { FormularioSelecFI };
