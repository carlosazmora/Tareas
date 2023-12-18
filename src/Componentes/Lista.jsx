import React, { useState, useEffect } from 'react';
import "../Stylesheets/Lista.css";
import Formulario from './Formulario';
import Tarea from './Tarea';

function Lista() {
  const storedList = localStorage.getItem("tareas");
  const initialList = storedList ? JSON.parse(storedList) : [];
  const [tareas, setTareas] = useState(initialList);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tareaEditadaId, setTareaEditadaId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const editarTarea = (id, nuevoTexto) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.texto = nuevoTexto;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    setModoEdicion(false);
    setTareaEditadaId(null);
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  const activarEdicion = id => {
    setModoEdicion(true);
    setTareaEditadaId(id);
  }

  return (
    <>
      <Formulario onSubmit={modoEdicion ? (texto) => editarTarea(tareaEditadaId, texto) : agregarTarea} modoEdicion={modoEdicion} />
      <div className="Lista-contenedor">
      {
        tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            editarTarea={editarTarea}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            activarEdicion={activarEdicion}
            modoEdicion={modoEdicion}
          />
        ))
      }
      </div>
    </>
  );
}

export default Lista;