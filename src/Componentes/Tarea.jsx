import React, { useState } from 'react';
import "../Stylesheets/Tarea.css";
import "../Stylesheets/InputEditar.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Boton from './Boton';

function Tarea({ id, texto, completada, editarTarea, completarTarea, eliminarTarea, activarEdicion, modoEdicion }) {
  const [nuevoTexto, setNuevoTexto] = useState(texto);

  const handleGuardarEdicion = () => {
    editarTarea(id, nuevoTexto);
  };

  return (
    <div className={completada ? "Contenedor completada" : "Contenedor"}>
      {modoEdicion ? (
        <>
          <input className="InputEditar"
            type="text" 
            value={nuevoTexto} 
            onChange={(e) => setNuevoTexto(e.target.value)} 
          />
          <Boton Clicked={handleGuardarEdicion}>Finalizar Edición</Boton>
        </>
      ) : (
        <>
          <div className="Texto" onClick={() => completarTarea(id)}>
            {texto}
          </div>
          <div className="Contenedor-Editar" onClick={() => activarEdicion(id)}>
            <Boton Clicked={activarEdicion}>Editar</Boton>
          </div>
          <div className="Contenedor-Icono" onClick={() => eliminarTarea(id)}>
            <AiOutlineCloseCircle className="Icono"/>
          </div>
        </>
      )}
    </div>
  );
}

export default Tarea;