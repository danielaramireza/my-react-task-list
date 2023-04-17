import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import { useToDo } from "./hooks/useToDo";

function App() {
  const {
    listaDeTareas,
    agregarTarea,
    eliminarTarea,
    cambiarEstadoTarea,
    actualizarTarea,
  } = useToDo();

  useEffect(() => {
    localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
  }, [listaDeTareas]);

  return (
    <div className="App">
      <Header titulo="ToDo App" />
      <Input agregarTarea={agregarTarea} />
      <TaskList
        listaDeTareas={listaDeTareas}
        eliminarTarea={eliminarTarea}
        cambiarEstadoTarea={cambiarEstadoTarea}
        actualizarTarea={actualizarTarea}
      />
    </div>
  );
}

export default App;
