import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOEdit.css";

function FormularioPOedit() {
  const { setOpenModalEditar, proyectoSelec } = React.useContext(POContext);

  const [nombre, setNombre] = React.useState("");
  const [fechaCreacion, setFechaCreacion] = React.useState("");
  const [fechaInicio, setFechaInicio] = React.useState("");
  const [fechaFin, setFechaFin] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

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
    setOpenModal(false);
  };

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
    setOpenModalEditar(false);
  };
  return (
    <form className="FormularioPOedit" onSubmit={onSubmit}  >
      <h2>Editando proyecto</h2>
      <label>Nombre del proyecto</label>
      <textarea
        maxLength={50}
        value={proyectoSelec.nombre}
        onChange={onChangeNombre}
      ></textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <textarea
          value={proyectoSelec.fechaInicio}
          onChange={onChangeFechaIni}
        ></textarea>
        <label>Fecha de finalización</label>
        <textarea
          onChange={onChangeFechaFin}
          value={proyectoSelec.fechaFin}
        ></textarea>
        <label>Fecha de creación</label>
        <textarea
          onChange={onChangeFechaCre}
          value={proyectoSelec.fechaCreacion}
        ></textarea>
        <label>Estado proyecto</label>
        <textarea
          onChange={onChangeEstado}
          value={proyectoSelec.estado}
        ></textarea>
      </div>

      <label>descripcion del proyecto</label>
      <select
        value={proyectoSelec.estado}
        onChange={onChangeEstado}
        placeholder="estado"
        required
      >
        <option value="">Seleccione</option>
        <option value="Activo">Activo</option>
        <option value="Cerrado">Cerrado</option>
        <option value="Anulado">Anulado</option>
        <option value="Suspendido">Suspendido</option>
        <option value="Cancelado">Cancelado</option>
      </select>
      <div>
        <button onClick={onCancel}>Volver</button>
        <button type="submit">Aceptar</button>
      </div>
    </form>
  );
}
export { FormularioPOedit };
