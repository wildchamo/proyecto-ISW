import React from "react";
import { POContext } from "../../../controlador/controlador";
import "./grafica.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function Grafica() {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const {
    proyectosTotal,
    proyectosActivosValue,
    proyectosCerradosValue,
    proyectosAnuladosValue,
    proyectosCanceladosValue,
    proyectosSuspendidosValue,
  } = React.useContext(POContext);

  const data = {
    // labels: ["Activos", "Cerrados", "Anulados", "Cancelados", "Suspendidos"],
    datasets: [
      {
        data: [
          proyectosActivosValue,
          proyectosCerradosValue,
          proyectosAnuladosValue,
          proyectosCanceladosValue,
          proyectosSuspendidosValue,
        ],
        backgroundColor: [
          "#31B465",
          "#FFD600",
          "#7E818C",
          "#9E0B0F",
          "#0024A9",
        ],
        borderColor: ["#31B465", "#FFD600", "#7E818C", "#9E0B0F", "#0024A9"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="grafica">
        <p>Tienes {proyectosTotal} proyectos.</p>
        <div style={{ width: 160, margin: "0 auto" }}>
          <Doughnut data={data} />
        </div>

        <div className="proyectos">
          <div className="puntito">
            <p id="p-activo">●</p> {" "}
            <p> {proyectosActivosValue} Proyectos activos</p> 
          </div>
          <div className="puntito">
            <p id="p-cerrado">●</p> {" "}
            <p>{proyectosCerradosValue} Proyectos cerrados</p> 
          </div>
          <div className="puntito">
            <p id="p-anulado">●</p> {" "}
            <p>{proyectosAnuladosValue} Proyectos anulados</p> 
          </div>
          <div className="puntito">
            <p id="p-cancelado">●</p> {" "}
            <p>{proyectosCanceladosValue} Proyectos cancelados</p> 
          </div>
          <div className="puntito">
            <p id="p-suspendido">●</p> {" "}
            <p>{proyectosSuspendidosValue} Proyectos suspendidos</p> 
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Grafica };
