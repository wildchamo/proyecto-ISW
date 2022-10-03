import React from 'react';
import {ListaProyectoOperativo} from '../Components/listaProyectoOperativo/listaProyectoOperativo.js';
import {ProyectoOperativo} from '../Components/proyectoOperativo/proyectoOperativo.js';


function AppUI({
    proyectosTotal,
  }) 
  {
    return (
      <React.Fragment>
         
        <ListaProyectoOperativo>
          {proyectosTotal.map(proyecto => (
            <ProyectoOperativo
              key={proyecto.nombre}
              nombre={proyecto.nombre}
              fechaInicio={proyecto.fechaInicio}
              fechaFin={proyecto.fechaFin}
              fechaCreación={proyecto.fechaCreacion}
              estado={proyecto.estado}
              descripción= {proyecto.descripción}
              />
          ))}
        </ListaProyectoOperativo>  
      </React.Fragment>
    );
  }
  
  export { AppUI };