import React from "react";

import derecha from "./derecha.png";
import izquierda from "./izquierda.png";

function Paginacion(props) {
  return <React.Fragment>

    <p>Página</p>
    <img src={izquierda} alt="flecha izquierda" />

    <div>1</div>
    <div>2</div>
    <img src={derecha} alt="flecha derecha" />
  
  </React.Fragment>;
}

export { Paginacion };
