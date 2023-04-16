import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [listaDeTareas, setListaDeTareas] = useState([]);

  function retornarUltimoId() {
    const ultimoId = listaDeTareas.reduce((max, objeto) => {
      console.log(objeto);
      if (objeto.id > max) {
        return objeto.id;
      }
      return max;
    }, 0);
    return ultimoId + 1;
  }

  function agregarTarea(nombreTarea) {
    console.log(nombreTarea);
    setListaDeTareas([
      ...listaDeTareas,
      { id: retornarUltimoId(), TaskName: nombreTarea, State: false },
    ]);
  }

  return (
    <div className="App">
      <Header titulo="Todo App" />
      <Input agregarTarea={agregarTarea} />
      <TaskList listaDeTareas={listaDeTareas} />
    </div>
  );
}

export default App;
