import React from 'react';
import { AppUI } from './AppUI.js';

const defaultProyectos = [
  { nombre: 'ChatBot Sinapsis (Diseño de flujo)', fechaInicio:'' , fechaFin:'',fechaCreacion:'',estado:'Activo', descripcion:'Soy una descripción' },
  { nombre: 'Investigación arquitectura PWA', fechaInicio:'' , fechaFin:'',fechaCreacion:'',estado:'Cerrado', descripcion:'Soy una descripción' },
  { nombre: 'Software de encuestas Limesurvey', fechaInicio:'' , fechaFin:'',fechaCreacion:'',estado:'Cancelado', descripcion:'Soy una descripción' }
];

function App() {
  
  return (
    <AppUI
    proyectosTotal={defaultProyectos}
    />
  );
}

export default App;
