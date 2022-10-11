import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOEdit.css";

function FormularioPOedit(props) {
  const { setOpenModalEditar } = React.useContext(POContext);
  const onCancel = () => {
    setOpenModalEditar(false);
  };
  return (
    <form className="FormularioPOedit">
      <h2>Editando proyecto</h2>
      <label>Nombre del proyecto</label>
      <textarea maxLength={50} value={props.nombre}></textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <textarea value={props.fechaInicio}></textarea>
        <label>Fecha de finalización</label>
        <textarea value={props.fechaFin}></textarea>
        <label>Fecha de creación</label>
        <textarea value={props.fechaCreacion}></textarea>
        <label>Estado proyecto</label>
        <textarea value={props.estado}></textarea>
      </div>

      <label>descripcion del proyecto</label>
      <textarea  maxLength={1000} value={props.descripcion}></textarea>
      <button onClick={onCancel}>Volver</button>
    </form>
  );
}
export { FormularioPOedit };
