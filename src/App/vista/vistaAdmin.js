import React from "react";
import { Header } from "./Components/admin/Header/header";
import { MainAdmin } from "./Components/Main/MainAdmin.js";
import { UOContext } from "../controlador/controladorUnidades";
import { Modal } from "./Components/modal/modal";

import { FormularioUO } from "./Components/admin/formularioUO/formularioUO.js";
import { FormularioEstado } from "./Components/admin/formularioEstado/formularioEstado";

function AppUIAdmin() {
  const { openModalCrear,openModalEstado } = React.useContext(UOContext);

  return (
    <React.Fragment>
      <Header />
      <MainAdmin />

      {openModalCrear && (
        <Modal>
          <FormularioUO />
        </Modal>
      )}
      {openModalEstado && (
        <Modal>
          <FormularioEstado />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUIAdmin };
