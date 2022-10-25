import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { AppUI } from "./vista/vista.js";
import { POProvider } from "./controlador/controlador";
import { Login } from "./vista/Components/login/login.js";

function App() {
  return (
    <BrowserRouter>
      <POProvider>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<AppUI />}></Route>
        </Routes>
      </POProvider>
    </BrowserRouter>
  );
}

export default App;
