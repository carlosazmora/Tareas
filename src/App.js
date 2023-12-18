import './App.css';
import Formulario from './Componentes/Formulario.jsx';
import Saludo from "./Componentes/Saludo.jsx";
import Tarea from './Componentes/Tarea.jsx';

function App() {
  return (
    <div className="Principal">
      <Saludo>¡Hola, Mundo!</Saludo>
      <div className="Lista">
        <h1>Tareas</h1>
        <Formulario/>
      </div>
    </div>
  );
}

export default App;
