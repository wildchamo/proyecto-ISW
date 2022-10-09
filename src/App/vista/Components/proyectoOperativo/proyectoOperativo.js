import React from "react";
import './proyectoOperativo.css'
import anular from './anular.png';
import editar from './editar.png';
import ver from './ver.png';

function ProyectoOperativo(props) {


  const onDelete =() =>{
    alert("Borraste el todo " + props.text);
  }

  return (
    <li className="proyectoOperativo">
      <p>{props.nombre}</p>
      <p>{props.fechaInicio}</p>
      <p>{props.fechaFin}</p>
      <p>● {props.estado}</p>
      <p><img src={editar} alt="botón editar" /></p>
      <p><img src={ver} alt="botón ver más" /></p>
      <p><img src={anular} alt="botón anular" /></p>
    
    </li>
  );
}
export { ProyectoOperativo };