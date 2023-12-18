import React from 'react';
import "../Stylesheets/Saludo.css";

function Saludo(props) {
  return (
    <div className="Saludo">
      {props.children}
    </div>
  );
}

export default Saludo;