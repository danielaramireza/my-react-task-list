import { useState } from "react";

export const useToDo = () => {
  const [listaDeTareas, setListaDeTareas] = useState(
    localStorage.getItem("listaDeTareas")
      ? JSON.parse(localStorage.getItem("listaDeTareas"))
      : []
  );

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

  function cambiarEstadoTarea(id, estadoTarea) {
    const nuevaListaDeTareas = listaDeTareas.map((tarea) => {
      if (tarea.id == id) {
        return { ...tarea, State: estadoTarea };
      }
      return tarea;
    });
    setListaDeTareas(nuevaListaDeTareas);
  }

  function actualizarTarea(id, name) {
    const nuevaListaDeTareas = listaDeTareas.map((tarea) => {
      if (tarea.id == id) {
        return { ...tarea, TaskName: name };
      }
      return tarea;
    });
    setListaDeTareas(nuevaListaDeTareas);
  }

  return {
    listaDeTareas,
    agregarTarea,
    eliminarTarea,
    cambiarEstadoTarea,
    actualizarTarea,
  };
};
