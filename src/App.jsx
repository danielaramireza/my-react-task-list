import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import { useEffect, useState } from "react";
import Input from "./components/Input";

function App() {
  const [listaDeTareas, setListaDeTareas] = useState(
    localStorage.getItem("listaDeTareas")
      ? JSON.parse(localStorage.getItem("listaDeTareas"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
  }, [listaDeTareas]);

  function retornarUltimoId() {
    const ultimoId = listaDeTareas.reduce((max, objeto) => {
      if (objeto.id > max) {
        return objeto.id;
      }
      return max;
    }, 0);
    return ultimoId + 1;
  }

  function agregarTarea(nombreTarea) {
    setListaDeTareas([
      ...listaDeTareas,
      { id: retornarUltimoId(), TaskName: nombreTarea, State: false },
    ]);
  }

  function eliminarTarea(id) {
    const nuevaListaDeTareas = listaDeTareas.filter((tarea) => tarea.id != id);
    setListaDeTareas(nuevaListaDeTareas);
  }

  return (
    <div className="App">
      <Header titulo="Todo App" />
      <Input agregarTarea={agregarTarea} />
      <TaskList listaDeTareas={listaDeTareas} eliminarTarea={eliminarTarea} />
    </div>
  );
}

export default App;
