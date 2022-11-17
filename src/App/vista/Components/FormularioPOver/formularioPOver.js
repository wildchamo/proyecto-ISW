import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./formularioPOver.css";

function FormularioPOver() {
  const { setOpenModalVerMas, proyectoSelec } = React.useContext(POContext);
  const motivo = proyectoSelec.motivoCancelacion;
  const estado = proyectoSelec.estado;

  const onCancel = () => {
    setOpenModalVerMas(false);
  };

  return (
    <form className="FormularioPOver">
      <h2>Detalles del proyecto</h2>

      <label>Nombre del proyecto</label>
      <textarea readOnly className="entradas" value={proyectoSelec.nombre}></textarea>
      <div className="divisor">
        <label>Fecha de inicio</label>
        <input readOnly type="date" className="entradas" value={proyectoSelec.fechaInicio}></input>
        <label>Fecha de finalización</label>
        <input readOnly type="date" className="entradas" value={proyectoSelec.fechaFin}></input>
        <label>Fecha de creación</label>
        <input readOnly type="date" className="entradas" value={proyectoSelec.fechaCreacion}></input>
        <label>Estado proyecto</label>
        <input readOnly className="entradas" value={proyectoSelec.estado}></input>
      </div>
      {estado==="Anulado" &&(
        <div className="motivo">
          <label>Motivo Cancelación</label>
          <textarea  readOnly value={proyectoSelec.motivoCancelacion}></textarea>
        </div>
      )}
      <label>descripcion del proyecto</label>
      <textarea readOnly  value={proyectoSelec.descripcion}></textarea>
        <div className="finalver"> 
      <button onClick={onCancel}>Volver</button>
        </div>
    </form>
  );
}
export { FormularioPOver };
