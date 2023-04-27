import Task from "./Task";

const TaskList = (props) => {
  const { listaDeTareas, eliminarTarea, cambiarEstadoTarea, actualizarTarea } =
    props;

  return (
    <ul>
      {listaDeTareas.map((tarea) => (
        <Task
          key={tarea.id}
          id={tarea.id}
          name={tarea.TaskName}
          description={tarea.descripcion}
          state={tarea.State}
          eliminarTarea={eliminarTarea}
          cambiarEstadoTarea={cambiarEstadoTarea}
          actualizarTarea={actualizarTarea}
        />
      ))}
    </ul>
  );
};

export default TaskList;
