import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPO.css";

function FormularioPO() {
  const { agregarProyecto, setOpenModal, fechaHoy, estados } =
    React.useContext(POContext);

  const [nombre, setNombre] = React.useState("");
  const [fechaCreacion] = React.useState(fechaHoy);
  const [fechaInicio, setFechaInicio] = React.useState("");
  const [fechaFin, setFechaFin] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const onChangeNombre = (event) => {
    setNombre(event.target.value);
  };
  const onChangeEstado = (event) => {
    setEstado(event.target.value);
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
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarProyecto(
      nombre,
      fechaInicio,
      fechaFin,
      fechaCreacion,
      estado,
      descripcion
    );
    setOpenModal(false);
  };

  return (
    <form className="formularioPO" onSubmit={onSubmit}>
      <h2>Creando proyecto nuevo...</h2>
      <label>Nombre del proyecto *</label>
      <textarea
        required
        value={nombre}
        onChange={onChangeNombre}
        placeholder="Nombre del proyecto"
        maxLength={50}
      ></textarea>
      <div className="divisor">
        <label>Fecha de inicio </label>
        <input
          type="date"
          onChange={onChangeFechaIni}
          placeholder="fecha de inicio"
          min={fechaCreacion}
        />
        <label>Fecha de finalización </label>
        <input
          type="date"
          onChange={onChangeFechaFin}
          placeholder="fecha de finalización"
          min={fechaInicio}
        />
        <label>Fecha de creación </label>
        <input
          type="date"
          disabled
          value={fechaCreacion}
          placeholder="fecha de creación"
        />
        <label>Estado *</label>
        <select
          value={estado}
          onChange={onChangeEstado}
          placeholder="estado"
          required
        >
          <option></option>
          {estados.map((estado) => (
            <option key={estado.idestado} value={estado.idestado}>
              {estado.nombre}
            </option>
          ))}
        </select>
      </div>

      <label>Descripcion del proyecto</label>
      <textarea
        onChange={onChangeDes}
        placeholder="Descripción proyecto"
        maxLength={1000}
      ></textarea>
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
