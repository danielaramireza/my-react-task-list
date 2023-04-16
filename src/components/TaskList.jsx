import Task from "./Task";

const TaskList = (props) => {
  const { listaDeTareas, eliminarTarea, cambiarEstadoTarea } = props;

  return (
    <ul>
      {listaDeTareas.map((tarea) => (
        <Task
          key={tarea.id}
          id={tarea.id}
          name={tarea.TaskName}
          state={tarea.State}
          eliminarTarea={eliminarTarea}
          cambiarEstadoTarea={cambiarEstadoTarea}
        />
      ))}
    </ul>
  );
};

export default TaskList;
