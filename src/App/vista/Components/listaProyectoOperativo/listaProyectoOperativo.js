import React from "react";
import './listaProyectoOperativo.css'


function ListaProyectoOperativo(props){
    return(
        <section className="listaProyectoOperativo">
            <h1>
            Proyectos operativos de la unidad
            </h1>


            <ul>
                {props.children}
            </ul>
        </section>
    );
}


export { ListaProyectoOperativo };