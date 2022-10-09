import React from "react";
import { BusquedaProyecto } from "../BusquedaProyecto/BusquedaProyecto";
import "./header.css";

function Header(){
    return(
        <header class="box">
            <img></img>
            <h1>
                ¡Bienvenido!
            </h1>
            <BusquedaProyecto/>
        </header>
    
    )
}
export{Header};