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
      <p>Cancelando el proyecto {nombre}</p>
      <label>Por qué quieres cancelar el proyecto?</label>
      <input type="text" onChange={onChangeMotivo} required></input>

      <button onClick={onCancel}>Volver</button>

      <button type="submit">Aceptar</button>
    </form>
  );
}

export { FormularioPOanular };
