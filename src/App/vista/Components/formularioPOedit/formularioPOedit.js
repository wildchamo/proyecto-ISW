import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOEdit.css";

function FormularioPOedit() {
  const { setOpenModalEditar, proyectoSelec } = React.useContext(POContext);
  const onCancel = () => {
    setOpenModalEditar(false);
  };
  return (
    <form className="FormularioPOedit">
      <h2>Editando proyecto</h2>
      <label>Nombre del proyecto</label>
      <textarea maxLength={50} value={proyectoSelec.nombre}></textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <textarea value={proyectoSelec.fechaInicio}></textarea>
        <label>Fecha de finalización</label>
        <textarea value={proyectoSelec.fechaFin}></textarea>
        <label>Fecha de creación</label>
        <textarea value={proyectoSelec.fechaCreacion}></textarea>
        <label>Estado proyecto</label>
        <textarea value={proyectoSelec.estado}></textarea>
      </div>

      <label>descripcion del proyecto</label>
      <textarea  maxLength={1000} value={proyectoSelec.descripcion}></textarea>
      <button onClick={onCancel}>Volver</button>
    </form>
  );
}
export { FormularioPOedit };
