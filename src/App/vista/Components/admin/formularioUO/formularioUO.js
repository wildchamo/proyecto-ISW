import React from "react";
import { UOContext } from "../../../../controlador/controladorUnidades";
import "./estilos.css"

function FormularioUO() {
  const { agregarUnidad, setOpenModalCrear, jefes } =
    React.useContext(UOContext);

  const [nombre, setNombre] = React.useState("");
  const [jefe, setJefe] = React.useState("");

  const onChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const onChangeJefe = (event) => {
    setJefe(event.target.value);
  };

  const onCancel = () => {
    setOpenModalCrear(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    agregarUnidad(nombre, jefe);
    setOpenModalCrear(false);
  };

  return (
    <form className="formularioUO2" onSubmit={onSubmit}>
      <h2>Creando Unidad Nueva...</h2>
      <label>Nombre de la unidad *</label>
      <textarea
        required
        value={nombre}
        onChange={onChangeNombre}
        placeholder="Nombre de la unidad"
        maxLength={50}
      ></textarea>
      <label>Jefe de unidad asociado *</label>

      <select
        className="estado"
        value={jefe}
        onChange={onChangeJefe}
        placeholder="Jefe"
        required
      >
        <option>Seleccione</option>
        {jefes.map((jefe) => (
          <option key={jefe.idusuario} value={jefe.idusuario}>
            {jefe.nombre}
          </option>
        ))}
      </select>
      <div>

      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
      <button type="submit">Crear Unidad</button>
      </div>

    </form>
  );
}
export { FormularioUO };
