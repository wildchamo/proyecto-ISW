import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOver.css";

function FormularioPOver() {
  const { setOpenModalVerMas, proyectoSelec } = React.useContext(POContext);
  const onCancel = () => {
    setOpenModalVerMas(false);
  };

  return (
    <form className="FormularioPOver">
      <h2>Detalles del proyecto</h2>

      <label>Nombre del proyecto</label>
      <textarea readOnly value={proyectoSelec.nombre}></textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <textarea readOnly value={proyectoSelec.fechaInicio}></textarea>
        <label>Fecha de finalización</label>
        <textarea readOnly value={proyectoSelec.fechaFin}></textarea>
        <label>Fecha de creación</label>
        <textarea readOnly value={proyectoSelec.fechaCreacion}></textarea>
        <label>Estado proyecto</label>
        <textarea readOnly value={proyectoSelec.estado}></textarea>
      </div>

      <label>descripcion del proyecto</label>
      <textarea readOnly value={proyectoSelec.descripcion}></textarea>
      <label>Motivo cancelación proyecto</label>
      <textarea readOnly value={proyectoSelec.motivoCancelación}></textarea>

      <button onClick={onCancel}>Volver</button>
    </form>
  );
}
export { FormularioPOver };
