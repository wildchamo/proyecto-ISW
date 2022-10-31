import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./busquedaProyecto.css";
import lupa from "./lupa.png";

function BusquedaProyecto() {
  const { searchValue, setSearchValue } = React.useContext(POContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    console.log("Hola")
  };

  return (
    <input
      onChange={onSearchValueChange}
      className="busquedaProyecto"
      placeholder="Buscar"
      value={searchValue}
    /> 
     
  );
}
export { BusquedaProyecto };
