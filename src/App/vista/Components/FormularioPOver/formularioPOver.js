import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOver.css";

function FormularioPOver(props) {
  const { setOpenModalVerMas } = React.useContext(POContext);
  const onCancel = () => {
    setOpenModalVerMas(false);
  };
  
  return (
    <form className="FormularioPOver">
      <h2>Detalles del proyecto</h2>

      <label>Nombre del proyecto</label>
      <textarea readOnly value={props.nombre}></textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <textarea readOnly value={props.fechaInicio}></textarea>
        <label>Fecha de finalización</label>
        <textarea readOnly value={props.fechaFin}></textarea>
        <label>Fecha de creación</label>
        <textarea readOnly value={props.fechaCreacion}></textarea>
        <label>Estado proyecto</label>
        <textarea readOnly value={props.estado}></textarea>
      </div>

      <label>descripcion del proyecto</label>
      <textarea readOnly value={props.descripcion}></textarea>
      <button onClick={onCancel}>Volver</button>
    </form>
  );
}
export { FormularioPOver };
