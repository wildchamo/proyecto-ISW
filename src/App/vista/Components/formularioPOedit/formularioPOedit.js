import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOEdit.css";

function FormularioPOedit() {
  const { setOpenModalEditar, proyectoSelec, editarProyecto, estados } =
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
        {nombre}
      </textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <input
          type="date"
          onChange={onChangeFechaIni}
          value={fechaInicio}
          min={fechaCreacion}
        />
        <label>Fecha de finalización</label>
        <input
          type="date"
          onChange={onChangeFechaFin}
          value={fechaFin}
          min={fechaInicio}
        />
        <label>Fecha de creación</label>
        <input type="date" onChange={onChangeFechaCre} value={fechaCreacion} />

        <label>Estado del proyecto *</label>
        <select value={estado.idestado} onChange={onChangeEstado} required>
          <option></option>
          {estados.map((estado) => (
            <option key={estado.idestado} value={estado.nombre}>
              {estado.nombre}
            </option>
          ))}
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
