import React, { useState } from "react";
import derecha from "./derecha.png";
import izquierda from "./izquierda.png";
import { POContext } from "../../../controlador/controlador";

import "./paginacion.css";

function Paginacion() {
  const { nextPage, prevPage } = React.useContext(POContext);

  return (
    <div className="paginacion">
      <p>Página</p>
      <img onClick={prevPage} src={izquierda} alt="flecha izquierda" />

      <div>1</div>
      <div>2</div>
      <img onClick={nextPage} src={derecha} alt="flecha derecha" />
    </div>
  );
}

export { Paginacion };
