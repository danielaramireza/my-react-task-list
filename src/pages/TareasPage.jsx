import Header from "../components/Header";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import { useToDo } from "../hooks/useToDo";

export default function TareasPage() {
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
    <>
      <div className="App">
        <Header titulo="TaskMate App" />
        <Input agregarTarea={agregarTarea} />
      </div>
      <div className="App">
        <TaskList
          listaDeTareas={listaDeTareas}
          eliminarTarea={eliminarTarea}
          cambiarEstadoTarea={cambiarEstadoTarea}
          actualizarTarea={actualizarTarea}
        />
      </div>
    </>
  );
}
