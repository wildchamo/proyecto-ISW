import React from "react";


function listaProyectoOperativo(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}


export { listaProyectoOperativo };