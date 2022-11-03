import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { AppUI } from "./vista/vista.js";
import { POProvider } from "./controlador/controlador";
import { UOProvider } from "./controlador/controladorUnidades";
import { Login } from "./vista/Components/login/login.js";
import { LoginAdmin } from "./vista/Components/loginAdmin/loginAdmin.js";

function App() {
  return (
    <BrowserRouter>
      <POProvider>
          <UOProvider>
        <Routes>
            <Route path="/admin" element={<LoginAdmin />}></Route>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<AppUI />}></Route>
        </Routes>
          </UOProvider>
      </POProvider>
    </BrowserRouter>
  );
}

export default App;
