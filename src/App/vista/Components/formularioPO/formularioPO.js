import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPO.css";

function FormularioPO() {
  const [valorNuevoProyecto, setValorNuevoProyecto] = React.useState("");
  const { agregarProyecto, setOpenModal } = React.useContext(POContext);

  const onChange = (event) => {
    setValorNuevoProyecto(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarProyecto(valorNuevoProyecto);
    setOpenModal(false);
  };

  return (
    <form className="formularioPO" onSubmit={onSubmit}>
      <h2>Creando proyecto nuevo...</h2>
      <label>Nombre del proyecto *</label>
      <textarea
        value={valorNuevoProyecto}
        onChange={onChange}
        placeholder="Nombre del proyecto"
      ></textarea>
      {/* 
      <label>Descripción proyecto</label>
      <textarea placeholder="Descripción del proyecto"></textarea> */}
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
