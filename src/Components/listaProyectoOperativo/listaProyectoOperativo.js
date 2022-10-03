import React from "react";


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