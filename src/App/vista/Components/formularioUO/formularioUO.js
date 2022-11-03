import React from "react";
import { UOContext } from "../../../controlador/controladorUnidades";

function FormularioUO() {
  const { agregarUnidad, setOpenModalCrear, fechaHoy, jefes } =
    React.useContext(UOContext);

  const [nombre, setNombre] = React.useState("");
  const [fechaCreacion] = React.useState(fechaHoy);
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
    agregarUnidad(nombre, fechaCreacion, jefe);

    setOpenModalCrear(false);
  };

  return (
    <form className="formularioPO" onSubmit={onSubmit}>
      <h2>Creando Unidad Nueva...</h2>
      <label>Nombre del proyecto *</label>
      <textarea
        className="entradas"
        required
        value={nombre}
        onChange={onChangeNombre}
        placeholder="Nombre del proyecto"
        maxLength={50}
      ></textarea>

      <select
        className="estado"
        value={jefe}
        onChange={onChangeJefe}
        placeholder="Jefe"
        required
      >
        <option></option>
        {jefes.map((jefe) => (
          <option key={jefe.ID} value={jefe.nombre}>
            {jefe.nombre}
          </option>
        ))}
      </select>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
}
export { FormularioUO };
