import React from "react";
import './proyectoOperativo.css'

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

    
    </li>
  );
}
export { ProyectoOperativo };