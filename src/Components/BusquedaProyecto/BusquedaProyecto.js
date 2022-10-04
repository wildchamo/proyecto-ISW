import React from "react";
import "./busquedaProyecto.css";

function BusquedaProyecto({searchValue, setSearchValue}) {

    const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return(
    <input
      onChange={onSearchValueChange}
      className="busquedaProyecto"
      placeholder="Buscar"
      value={searchValue}
    />
  );
}
export {BusquedaProyecto}