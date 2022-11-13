import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./FormularioSelecEstado.css";

function FormularioSelecNombre() {
  const { setNombre, setNombreSelec } =
    React.useContext(POContext);

  const onCancel = () => {
    setNombre(false);
  };

  const onClickR = (event) => {
    setNombreSelec(event.target.value);
    setNombre(false);
  };

  return (
    <div className="FormularioSelecnombre">

      <h2>Ordenar alfabeticamente de:</h2>

      <div className="radio">
        <input type="radio" value="ascen" onClick={onClickR} />
        <label>A-Z</label>
      </div>
      <div className="radio">
        <input type="radio" value="descen" onClick={onClickR} />
        <label>Z-A</label>
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
export { FormularioSelecNombre };
