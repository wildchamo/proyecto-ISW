import React from "react";
import { UOContext } from "../../../../controlador/controladorUnidades";

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
    <form className="formularioPO" onSubmit={onSubmit}>
      <h2>Creando Unidad Nueva...</h2>
      <label>Nombre de la unidad *</label>
      <textarea
        className="entradas"
        required
        value={nombre}
        onChange={onChangeNombre}
        placeholder="Nombre de la unidad"
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
