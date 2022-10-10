import React from "react";
import "./BotonCrearProyecto.css"


function BotonCrearProyecto(props){
const onClickButton =  ()=>{
props.setOpenModal(true);
}
 return(
    <button
    onClick={onClickButton}>
        + Crear nuevo proyecto
    </button>
)
}

export {BotonCrearProyecto};