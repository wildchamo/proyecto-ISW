import React from "react";
import { useEffect } from "react";
import { Header } from "./Components/Header/header";
import { Main } from "./Components/Main/Main.js";
import { POContext } from "../controlador/controlador";
import { Modal } from "./Components/modal/modal";
import Axios from "axios";
import { FormularioPO } from "./Components/formularioPO/formularioPO.js";

function AppUI() {
  const { setProyectos,openModal } = React.useContext(POContext);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setProyectos(response.data[0]);
    });
  }, []);

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
