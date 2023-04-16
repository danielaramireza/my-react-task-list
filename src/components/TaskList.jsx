import Task from "./Task";

const TaskList = (props) => {
  const { listaDeTareas } = props;

  return (
    <ul>
      {listaDeTareas.map((tarea) => (
        <Task key={tarea.id} name={tarea.TaskName} state={tarea.State} />
      ))}
    </ul>
  );
};

export default TaskList;
