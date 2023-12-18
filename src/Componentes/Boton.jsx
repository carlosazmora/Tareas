import React from 'react';
import "../Stylesheets/Boton.css";

function Boton(props) {
  return (
    <div className={"Boton editar".trimEnd()} onClick={() => props.Clicked(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;