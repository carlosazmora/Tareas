import React from 'react';
import "../Stylesheets/Formulario.css";

function Formulario(props) {
return (
  <form className="Formulario">
    <input className="Input" type="text" placeholder="Escribe una tarea" name = "texto"/>
    <button className="Boton">
      Agregar tarea
    </button>
  </form>
);
}

export default Formulario;