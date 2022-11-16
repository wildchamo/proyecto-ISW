 import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPO.css";
import atras from "./atras.png";

function FormularioPO() {
  const { agregarProyecto, setOpenModal, fechaHoy, fechaFinal, estados } =
    React.useContext(POContext);

  const [nombre, setNombre] = React.useState("");
  const [fechaCreacion] = React.useState(fechaHoy);
  const [fechaInicio, setFechaInicio] = React.useState(fechaHoy);
  const [fechaFin, setFechaFin] = React.useState(fechaFinal);
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
      <div className="Atras">
        <img src={atras} alt="atras" onClick={onCancel} />
      </div>

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
        <div className="titulos">
          <label>Fecha de inicio *</label>
          <input
            className="fecha"
            type="date"
            onChange={onChangeFechaIni}
            value={fechaInicio}
            placeholder="fecha de inicio"
            min={fechaCreacion}
          />{" "}
        </div>

        <div className="titulos">
          <label>Fecha de finalización *</label>
          <input
            className="fecha"
            type="date"
            onChange={onChangeFechaFin}
            value={fechaFin}
            placeholder="fecha de finalización"
            min={fechaInicio}
          />{" "}
        </div>

        <div className="titulos">
          <label>Fecha de creación</label>
          <input
            className="fecha"
            type="date"
            disabled
            value={fechaCreacion}
            placeholder="fecha de creación"
          />{" "}
        </div>

        <div className="titulos">
          <label>Estado *</label>
          <select
            className="estado"
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
      </div>

      <label>Descripción del proyecto</label>
      <textarea
        className="entradas"
        onChange={onChangeDes}
        placeholder="Descripción proyecto"
        maxLength={1000}
      ></textarea>
      <div className="final">
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
