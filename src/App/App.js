import React from "react";
import { AppUI } from "./vista/vista.js";
import { POProvider } from "./controlador/controlador";

function App() {
  return (
    <POProvider>
      <AppUI />
    </POProvider>
  );
}

export default App;
