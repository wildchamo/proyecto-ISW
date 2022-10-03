import React from 'react';
import {listaProyectoOperativo} from '../Components/listaProyectoOperativo/listaProyectoOperativo';
import {proyectoOperativo} from '../Components/proyectoOperativo/proyectoOperativo';


function AppUI({
    proyectosTotal,
  }) 
  {
    return (
      <React.Fragment>
         
        <listaProyectoOperativo>
          {proyectosTotal.map(proyecto => (
            <proyectoOperativo
              key={proyecto.nombre}
              nombre={proyecto.nombre}
              fechaInicio={proyecto.fechaInicio}
              fechaFin={proyecto.fechaFin}
              fechaCreación={proyecto.fechaCreacion}
              estado={proyecto.estado}
              descripción= {proyecto.descripción}
              />
          ))}
        </listaProyectoOperativo>  
      </React.Fragment>
    );
  }
  
  export { AppUI };