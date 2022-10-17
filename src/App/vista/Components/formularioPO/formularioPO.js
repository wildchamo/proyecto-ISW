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
        required
      ></textarea>
      <div>
        <label>Fecha de inicio</label>
        <textarea placeholder="fecha de inicio"></textarea>
        <label>Fecha de finalización</label>
        <textarea placeholder="fecha de finalización"></textarea>
        <label>Fecha de creación</label>
        <textarea placeholder="fecha de creación" readOnly>
          11-10-2022
        </textarea>
        <label>Estado proyecto</label>
        <select placeholder="estado">
          <option value="r">Rojo</option>
          <option value="a">Azul</option>
          <option value="v">Verde</option>
        </select>
      </div>

      <label>descripcion del proyecto</label>
      <textarea placeholder=""></textarea>
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
