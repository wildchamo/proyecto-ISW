import React from "react";
import { UOContext } from "../../../controlador/controladorUnidades";

function FormularioUO() {
  const { agregarUnidad, setOpenModalCrear, fechaHoy, jefes } =
    React.useContext(UOContext);

  const [nombre, setNombre] = React.useState("");
  const [fechaCreacion] = React.useState(fechaHoy);
  const [jefe, setJefe] = React.useState("");

  const onChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const onChangeJefe = (event) => {
    setJefe(event.target.value);
  };

  const onCancel = () => {
    setOpenModalCrear(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    agregarUnidad(nombre, fechaCreacion, jefe);

    setOpenModalCrear(false);
  };

  return (
    <form className="formularioPO" onSubmit={onSubmit}>
      <h2>Creando Unidad Nueva...</h2>

      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
}
export {FormularioUO};