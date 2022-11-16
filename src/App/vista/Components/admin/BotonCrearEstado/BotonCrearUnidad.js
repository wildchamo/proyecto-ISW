import React from "react";
import "./BotonCrearUnidad.css";

function BotonCrearEstado(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };
  return <button onClick={onClickButton}>+ Crear nuevo estado</button>;
}

export { BotonCrearEstado };
