import React from "react";
import { BusquedaProyecto } from "../BusquedaProyecto/BusquedaProyecto";
import "./header.css";
import logoSencillo from "./logosencillo.png";
import campana from "./campana.png";
import foto from "./foto.png";
import salir from "./salir.png";


function Header(){
    return(
        <header class="box">
            <div className="logoSencillo">
             <img className="logoSencillo" src={logoSencillo} alt="Logo" />
            </div>
            <h1>
                ¡Bienvenido!
            </h1>
            <BusquedaProyecto/>
            <div className="campana">
                <img className="campana" src={campana} alt="Campana para notificación" />
            </div>
            <div className="foto">
                <img className="foto" src={foto} alt="Foto de usuario" />
            </div>
            <div className="salir">
                <img className="salir" src={salir} alt="Cerrar sesión" />
            </div>            
        </header>
    
    )
}
export{Header};