import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOEdit.css";

function FormularioPOedit() {
  const { setOpenModalEditar, proyectoSelec, editarProyecto } =
    React.useContext(POContext);

  const [nombre, setNombre] = React.useState(proyectoSelec.nombre);
  const [fechaCreacion, setFechaCreacion] = React.useState(
    proyectoSelec.fechaCreacion
  );
  const [fechaInicio, setFechaInicio] = React.useState(
    proyectoSelec.fechaInicio
  );
  const [fechaFin, setFechaFin] = React.useState(proyectoSelec.fechaFin);
  const [estado, setEstado] = React.useState(proyectoSelec.estado);
  const [descripcion, setDescripcion] = React.useState(
    proyectoSelec.descripcion
  );

  const onSubmit = (event) => {
    event.preventDefault();
    editarProyecto(
      nombre,
      fechaInicio,
      fechaFin,
      fechaCreacion,
      estado,
      descripcion
    );
    setOpenModalEditar(false);
  };

  const onChangeNombre = (event) => {
    setNombre(event.target.value);
  };
  const onChangeEstado = (event) => {
    setEstado(event.target.value);
  };
  const onChangeFechaCre = (event) => {
    setFechaCreacion(event.target.value);
  };
  const onChangeFechaIni = (event) => {
    setFechaInicio(event.target.value);
  };
  const onChangeFechaFin = (event) => {
    setFechaFin(event.target.value);
  };
  const onChangeDes = (event) => {
    setDescripcion(event.target.value);
  };

  const onCancel = () => {
    setOpenModalEditar(false);
  };
  return (
    <form className="FormularioPOedit" onSubmit={onSubmit}>
      <h2>Editando proyecto</h2>
      <label>Nombre del proyecto</label>
      <textarea maxLength={50} onChange={onChangeNombre}>
        {proyectoSelec.nombre}
      </textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <input
          type="date"
          onChange={onChangeFechaIni}
          value={proyectoSelec.fechaInicio}
        />
        <label>Fecha de finalización</label>
        <input
          type="date"
          onChange={onChangeFechaFin}
          value={proyectoSelec.fechaFin}
        />
        <label>Fecha de creación</label>
        <input
          type="date"
          onChange={onChangeFechaCre}
          value={proyectoSelec.fechaCreacion}
        />
        <label>Estado proyecto</label>

        <select
          value={proyectoSelec.estado}
          onChange={onChangeEstado}
          required
        >
          <option value="Activo">Activo</option>
          <option value="Cerrado">Cerrado</option>
          <option value="Anulado">Anulado</option>
          <option value="Suspendido">Suspendido</option>
          <option value="Cancelado">Cancelado</option>
        </select>
      </div>
      <label>descripcion del proyecto</label>
      <textarea
        onChange={onChangeDes}
        value={proyectoSelec.descripcion}
      ></textarea>
      <div>
        <button onClick={onCancel}>Volver</button>
        <button type="submit">Aceptar</button>
      </div>
    </form>
  );
}
export { FormularioPOedit };
