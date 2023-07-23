import { useEffect, useState } from "react";
import axios from "axios";

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbWFyYWxAZ21haWwuY29tIiwibmFtZSI6IkRhbmllbGEiLCJpYXQiOjE2ODkxMTg3NDF9.kcWcXcICf_0eVYoblb4wVwvDhWBrJH_rrWKs8m3UHPo",
  },
};

export const useToDo = () => {
  const [listaDeTareas, setListaDeTareas] = useState([]);

  useEffect(() => {
    axios(config)
      .then((response) => {
        if (response.data?.success === true) {
          let res = response.data?.content.map((el) => {
            return {
              id: el.id,
              TaskName: el.name,
              descripcion: el.description,
              State: el.isCompleted,
            };
          });
          setListaDeTareas(res);
        } else {
          console.log("No se han podido recuperar las tareas");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function retornarUltimoId() {
    const ultimoId = listaDeTareas.reduce((max, objeto) => {
      if (objeto.id > max) {
        return objeto.id;
      }
      return max;
    }, 0);
    return ultimoId + 1;
  }

  function agregarTarea(nombreTarea, descripcion = null) {
    setListaDeTareas([
      ...listaDeTareas,
      {
        id: retornarUltimoId(),
        TaskName: nombreTarea,
        descripcion: descripcion,
        State: false,
      },
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

  function actualizarTarea(id, name, description = null) {
    const nuevaListaDeTareas = listaDeTareas.map((tarea) => {
      if (tarea.id == id) {
        return { ...tarea, TaskName: name, descripcion: description };
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
