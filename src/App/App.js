import React from 'react';
import { AppUI } from './AppUI.js';

const defaultProyectos = [
  { nombre: 'ChatBot Sinapsis (Diseño de flujo)', fechaInicio:'' , fechaFin:'',fechaCreación:'',estado:'Activo', descripcion:'Soy una descripción' },
  { nombre: 'Investigación arquitectura PWA', fechaInicio:'' , fechaFin:'',fechaCreación:'',estado:'Cerrado', descripcion:'Soy una descripción' },
  { nombre: 'Software de encuestas Limesurvey', fechaInicio:'' , fechaFin:'',fechaCreación:'',estado:'Cancelado', descripcion:'Soy una descripción' }
];

function App() {
  return (
    <AppUI
    />
  );
}

export default App;
