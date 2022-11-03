import React from "react";
import { Header } from "./Components/Header/header";
import { Main } from "./Components/Main/Main.js";
import { POContext } from "../controlador/controlador";
import { Modal } from "./Components/modal/modal";

import { FormularioPO } from "./Components/formularioPO/formularioPO.js";

function AppUIAdmin() {
  const { openModal} = React.useContext(POContext);


  return (
    <React.Fragment>
      <Header />
      <Main />

      <p>soy admin :devil</p>

      {openModal && (
        <Modal>
          <FormularioPO />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUIAdmin };
