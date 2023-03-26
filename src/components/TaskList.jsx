import Task from "./Task";
import TaskListObject from "../data";
const TaskList = (props) => {
  return (
    <ul>
      {TaskListObject.map((task) => (
        <Task key={task.id} name={task.TaskName} state={task.State} />
      ))}
    </ul>
  );
};

export default TaskList;
