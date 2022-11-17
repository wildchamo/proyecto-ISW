import React from "react";
import { UOContext } from "../../../../controlador/controladorUnidades";
import "./estilos.css"

function FormularioEstado() {
  const { agregarEstado,setOpenModalEstado } =
    React.useContext(UOContext);

  const [nombre, setNombre] = React.useState("");

  const onChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const onCancel = () => {
    setOpenModalEstado(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    agregarEstado(nombre);
    setOpenModalEstado(false);
  };

  return (
    <form className="formularioPO2" onSubmit={onSubmit}>
      <h2>Creando un estado nuevo...</h2>
      <label>Nombre del estado *</label>
      <textarea
        required
        value={nombre}
        onChange={onChangeNombre}
        placeholder="Nombre del estado"
        maxLength={10}
      ></textarea>
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Crear Estado</button>
      </div>
    </form>
  );
}
export { FormularioEstado };
