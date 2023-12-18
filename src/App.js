import './App.css';
import Lista from './Componentes/Lista.jsx';
import Saludo from "./Componentes/Saludo.jsx";

function App() {
  return (
    <div className="Principal">
      <Saludo>¡Hola, Mundo!</Saludo>
      <div className="Lista">
        <h1>Tareas</h1>
        <Lista/>
      </div>
    </div>
  );
}

export default App;
