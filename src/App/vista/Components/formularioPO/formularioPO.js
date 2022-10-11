import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPO.css";

function FormularioPO() {
  const [nombre, setNombre] = React.useState("");
  const [fechaCreacion, setFechaCreacion] = React.useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [estado, setEstado] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { agregarProyecto, setOpenModal } = React.useContext(POContext);

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
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarProyecto(nombre, fechaCreacion);
    setOpenModal(false);
  };

  return (
    <form className="formularioPO" onSubmit={onSubmit}>
      <h2>Creando proyecto nuevo...</h2>
      <label>Nombre del proyecto *</label>
      <textarea
        value={nombre}
        onChange={onChangeNombre}
        placeholder="Nombre del proyecto"
      ></textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <textarea
          onChange={onChangeFechaIni}
          placeholder="fecha de inicio"
        ></textarea>
        <label>Fecha de finalización</label>
        <textarea
          onChange={onChangeFechaFin}
          placeholder="fecha de finalización"
        ></textarea>
        <label>Fecha de creación</label>
        <textarea
          value={fechaCreacion}
          onChange={onChangeFechaCre}
          placeholder="fecha de creación"
        ></textarea>
        <label>Estado proyecto</label>
        <select value={estado} onChange={onChangeEstado} placeholder="estado">
          <option value="r">Rojo</option>
          <option value="a">Azul</option>
          <option value="v">Verde</option>
        </select>
      </div>

      <label>descripcion del proyecto</label>
      <textarea onChange={onChangeDes} placeholder=""></textarea>
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
