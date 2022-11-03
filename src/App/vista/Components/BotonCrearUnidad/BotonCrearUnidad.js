import React from "react";
import "./BotonCrearUnidad.css";

function BotonCrearUnidad(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };
  return <button onClick={onClickButton}>+ Crear nueva unidad</button>;
}

export { BotonCrearUnidad };
