import React from "react";
import { AppUI } from "../vista/AppUI.js";
import { POProvider } from "./controlador";

function App() {
  return (
    <POProvider>
      <AppUI />
    </POProvider>
  );
}

export default App;
