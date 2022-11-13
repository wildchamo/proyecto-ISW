import React from "react";
import { Header } from "./Components/Header/header";
import { MainAdmin } from "./Components/Main/MainAdmin.js";
import { UOContext } from "../controlador/controladorUnidades";
import { Modal } from "./Components/modal/modal";

import { FormularioUO } from "./Components/formularioUO/formularioUO.js";

function AppUIAdmin() {
  // const { openModalCrear} = React.useContext(UOContext);


  return (
    <React.Fragment>
      <Header />
      <MainAdmin />

{/* 
      {openModalCrear && (
        <Modal>
          <FormularioUO />
        </Modal>
      )} */}
    </React.Fragment>
  );
}

export { AppUIAdmin };
