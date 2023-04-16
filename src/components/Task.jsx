import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Task = (props) => {
  const { id, name, state, eliminarTarea, cambiarEstadoTarea } = props;

  const [estadoTarea, setEstadoTarea] = useState(state);
  const [claseDelEstado, setClaseDelEstado] = useState();

  useEffect(() => {
    if (estadoTarea == true) {
      setClaseDelEstado("classLine");
    } else {
      setClaseDelEstado("");
    }

    cambiarEstadoTarea(id, estadoTarea);
  }, [estadoTarea]);

  return (
    <li>
      <div className="task">
        <div className="task-left">
          <input
            className="checkbox"
            type="checkbox"
            checked={estadoTarea}
            onChange={(ev) => setEstadoTarea(ev.target.checked)}
          ></input>
          <p className={claseDelEstado}>{name}</p>
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
