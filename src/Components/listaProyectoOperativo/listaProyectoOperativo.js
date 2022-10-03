import React from "react";
import './listaProyectoOperativo.css'


function ListaProyectoOperativo(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}


export { ListaProyectoOperativo };