import React from "react";
import { AppUI } from "./App/vista/AppUI.js";
import { POProvider } from "./App/controlador/controlador";

function App() {
  return (
    <POProvider>
      <AppUI />
    </POProvider>
  );
}

export default App;
