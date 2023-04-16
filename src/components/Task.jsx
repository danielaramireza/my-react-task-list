import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
  const { id, name, state, eliminarTarea } = props;
  let classLine = "";
  if (state) {
    classLine = "classLine";
  }
  return (
    <li>
      <div className="task">
        <div className="task-left">
          <input
            className="checkbox"
            type="checkbox"
            checked={state}
            readOnly
          ></input>
          <p className={classLine}>{name}</p>
        </div>
        <div className="task-right">
          <button className="task-edit-button" type="button">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            className="task-delete-button"
            type="button"
            onClick={() => eliminarTarea(id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
