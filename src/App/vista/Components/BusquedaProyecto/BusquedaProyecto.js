import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./busquedaProyecto.css";

function BusquedaProyecto() {
  const { searchValue, setSearchValue } = React.useContext(POContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
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
