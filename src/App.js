import './App.css';
import Saludo from "./Componentes/Saludo.jsx";
import Tarea from './Componentes/Tarea.jsx';

function App() {
  return (
    <div className="Principal">
      <Saludo>¡Hola, Mundo!</Saludo>
      <div className="Lista">
        <h1>Tareas</h1>
        <Tarea texto = "Aprender a ser feliz" completada={false}/>
        <Tarea texto = "Dejar de preocuparse por ser feliz" completada={true}/>
      </div>
    </div>
  );
}

export default App;
