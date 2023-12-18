import React, { useState } from 'react';
import "../Stylesheets/Formulario.css";
import { v4 as uuidv4 } from 'uuid';

function Formulario(props) {

  const [input, setInput] = useState("");

  const cambioInput = event =>{
    setInput(event.target.value);
  }

  const enviarTarea = event =>{
    event.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
    setInput("");
  }

  return (
    <form className="Formulario" onSubmit={enviarTarea}>
      <input className="Input" type="text" value = {input} placeholder="Escribe una tarea" name = "texto" onChange={cambioInput}/>
      <button className="Boton">
        Agregar tarea
      </button>
    </form>
  );
}

export default Formulario;