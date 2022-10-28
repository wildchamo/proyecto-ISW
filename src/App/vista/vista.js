import React from "react";
import { Header } from "./Components/Header/header";
import { Main } from "./Components/Main/Main.js";
import { POContext } from "../controlador/controlador";
import { Modal } from "./Components/modal/modal";

import { FormularioPO } from "./Components/formularioPO/formularioPO.js";

function AppUI() {
  const { openModal} = React.useContext(POContext);


  return (
    <React.Fragment>
      <Header />
      <Main />

      {openModal && (
        <Modal>
          <FormularioPO />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
