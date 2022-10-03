import React from "react";


function proyectoOperativo(props) {


  const onDelete =() =>{
    alert("Borraste el todo " + props.text);
  }

  return (
    <li className="proyectoOperativo">

      <p>{props.nombre}, {props.fechaInicio},{props.fechaFin},{props.estado}</p>

    </li>
  );
}
export { proyectoOperativo };