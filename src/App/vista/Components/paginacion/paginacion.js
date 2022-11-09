import React, { useState } from "react";
import derecha from "./derecha.png";
import izquierda from "./izquierda.png";
import { POContext } from "../../../controlador/controlador";

import "./paginacion.css";

function Paginacion() {
  const { currentPage, nextPage, prevPage, proyectosBTotal } =
    React.useContext(POContext);

  return (
    <div className="paginacion">
      <p>Página</p>
      <img onClick={prevPage} src={izquierda} alt="flecha izquierda" />

      <div
        className={`contadorPagi ${
          currentPage === 0 && "contadoPagi--prendido"
        } `}
      >
        1
      </div>
      <div
        className={`contadorPagi ${
          currentPage === 5 && "contadoPagi--prendido"
        } `}
      >
        2
      </div>

      {proyectosBTotal > 12 && (
        <div
          className={`contadorPagi ${
            currentPage === 10 && "contadoPagi--prendido"
          } `}
        >
          3
        </div>
      )}

      {proyectosBTotal > 17 && (
        <div
          className={`contadorPagi ${
            currentPage === 15 && "contadoPagi--prendido"
          } `}
        >
          3
        </div>
      )}

      <img onClick={nextPage} src={derecha} alt="flecha derecha" />
    </div>
  );
}

export { Paginacion };
