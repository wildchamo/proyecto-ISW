import React from "react";
import { POContext } from "../../../controlador/controlador";

function FormularioPO() {
  const { agregarProyecto } = React.useContext(POContext);

  const onCancel = () => {};
  const onSubmit = () => {};

  return (
    <form onSubmit={onSubmit}>
      <h2>Creando proyecto nuevo...</h2>
      <label>Nombre del proyecto *</label>
      <textarea placeholder="Nombre del proyecto"></textarea>

      <label>Descripción proyecto</label>
      <textarea placeholder="Descripción del proyecto"></textarea>
      <div>
        <p>Los campos marcados con ‘*’ son de carácter obligatorio.</p>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Aceptar</button>
      </div>
    </form>
  );
}

export { FormularioPO };
