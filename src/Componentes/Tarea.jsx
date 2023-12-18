import React from 'react';
import "../Stylesheets/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? "Contenedor completada" : "Contenedor"}>
      <div className="Texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="Contenedor-Icono" onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="Icono"/>
      </div>
    </div>
  );
}

export default Tarea;