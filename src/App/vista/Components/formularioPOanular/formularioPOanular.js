import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOanular.css";

function FormularioPOanular() {
  const { setOpenModalAnular, proyectoSelec, anularProyecto } =
    React.useContext(POContext);
  const onCancel = () => {
    setOpenModalAnular(false);
  };
  const [nombre, setNombre] = React.useState(proyectoSelec.nombre);
  const [motivo, setMotivo] = React.useState(proyectoSelec.motivoCancelacion);

  const onChangeMotivo = (event) => {
    setMotivo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    anularProyecto(nombre, motivo);
    setOpenModalAnular(false);
  };

  return (
    <form className="FormularioPOAnular" onSubmit={onSubmit}>
      <p>¿Por qué deseas anular el proyecto {nombre}? *</p>
      <textarea
        placeholder="Justificación"
        type="text"
        onChange={onChangeMotivo}
        minLength="30"
        required
      ></textarea>

      <div>
        <div className="campos">
          <p>Los campos marcados con ‘*’ son de carácter obligatorio.</p>
          <button onClick={onCancel}>Volver</button>

          <button type="submit">Anular proyecto</button>
        </div>
      </div>
    </form>
  );
}

export { FormularioPOanular };
