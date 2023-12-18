import React from 'react';
import "../Stylesheets/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ texto, completada }) {
  return (
    <div className={completada ? "Contenedor completada" : "Contenedor"}>
      <div className="Texto">
        {texto}
      </div>
      <div className="Contenedor-Icono">
        <AiOutlineCloseCircle className="Icono"/>
      </div>
    </div>
  );
}

export default Tarea;