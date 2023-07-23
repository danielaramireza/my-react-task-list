import { useEffect, useState } from "react";
import axios from "axios";

let baseURL = "http://localhost:3000/";
let auth = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbWFyYWxAZ21haWwuY29tIiwibmFtZSI6IkRhbmllbGEiLCJpYXQiOjE2ODkxMTg3NDF9.kcWcXcICf_0eVYoblb4wVwvDhWBrJH_rrWKs8m3UHPo",
};

let getAllTasks = {
  method: "get",
  maxBodyLength: Infinity,
  url: baseURL,
  headers: auth,
};

export const useToDo = () => {
  const [listaDeTareas, setListaDeTareas] = useState([]);

  useEffect(() => {
    axios(getAllTasks)
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
    axios({
      method: "post",
      maxBodyLength: Infinity,
      url: baseURL + "tarea/nueva",
      headers: auth,
      data: JSON.stringify({
        name: nombreTarea,
      }),
    }).then((res) => {
      if (res.data?.success === true) {
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
    });
  }

  function eliminarTarea(id) {
    axios({
      method: "delete",
      maxBodyLength: Infinity,
      url: baseURL + "tarea/eliminar/" + id,
      headers: auth,
    }).then((res) => {
      if (res.data?.success === true) {
        const nuevaListaDeTareas = listaDeTareas.filter(
          (tarea) => tarea.id != id
        );
        setListaDeTareas(nuevaListaDeTareas);
      }
    });
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
