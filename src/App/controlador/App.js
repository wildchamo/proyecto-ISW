import React from "react";
import { AppUI } from "../vista/AppUI.js";
import {POProvider} from "./controlador";

function App() {


  return (
    <POProvider>
      <AppUI
        proyectosTotal={defaultProyectos}
        proyectosBuscados={proyectosBuscados}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </POProvider>
  );
}

export default App;
