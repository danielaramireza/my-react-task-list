import Task from "./Task";

const TaskList = (props) => {
  const { listaDeTareas, eliminarTarea } = props;

  return (
    <ul>
      {listaDeTareas.map((tarea) => (
        <Task
          key={tarea.id}
          id={tarea.id}
          name={tarea.TaskName}
          state={tarea.State}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
};

export default TaskList;
