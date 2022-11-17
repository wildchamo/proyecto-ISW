import React from "react";
import { UOContext } from "../../../../controlador/controladorUnidades";

function FormularioUOedit() {
  const { editarUnidad, setOpenModalEditar, unidadSelect, jefes } =
    React.useContext(UOContext);

  let idUsuAntiguo = unidadSelect.idusuario;
  const [nombre, setNombre] = React.useState(unidadSelect.nombreUnidad);
  const [jefe, setJefe] = React.useState(unidadSelect.idusuario);

  const onChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const onChangeJefe = (event) => {
    setJefe(event.target.value);
  };

  const onCancel = () => {
    setOpenModalEditar(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    editarUnidad(unidadSelect.idunidad,nombre, idUsuAntiguo, jefe);
    setOpenModalEditar(false);
  };

  return (
    <form className="formularioPO" onSubmit={onSubmit}>
      <h2>Modificando una unidad...</h2>
      <label>Nombre de la unidad *</label>
      <textarea
        required
        value={nombre}
        onChange={onChangeNombre}
        placeholder="Nombre de la unidad"
        maxLength={50}
      ></textarea>
      <label>Jefe de la unidad asociado *</label>

      <select
        className="estado"
        value={jefe}
        onChange={onChangeJefe}
        placeholder="Jefe"
        required
      >
        <option value={unidadSelect.idusuario}>{unidadSelect.nombre}</option>
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
        <button type="submit">Aceptar</button>
      </div>
    </form>
  );
}
export { FormularioUOedit };
