import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useColorModeValue } from "@chakra-ui/react";

const Task = (props) => {
  const {
    id,
    name,
    description,
    state,
    eliminarTarea,
    cambiarEstadoTarea,
    actualizarTarea,
  } = props;

  const [estadoTarea, setEstadoTarea] = useState(state);
  const [claseDelEstado, setClaseDelEstado] = useState();
  const [estadoModal, setEstadoModal] = useState(false);

  useEffect(() => {
    if (estadoTarea == true) {
      setClaseDelEstado("classLine");
    } else {
      setClaseDelEstado("");
    }

    cambiarEstadoTarea(id, estadoTarea);
  }, [estadoTarea]);

  const bgTask = useColorModeValue("taskLight", "taskDark");

  function cerrarModal() {
    setEstadoModal(false);
  }

  return (
    <li>
      <div className={`task ${bgTask}`}>
        <div className="task-left">
          <input
            className="checkbox"
            type="checkbox"
            checked={estadoTarea}
            onChange={(ev) => setEstadoTarea(ev.target.checked)}
          ></input>
          <div className="informacionTarea">
            <p className={claseDelEstado}>{name}</p>
            <small>{description}</small>
          </div>
        </div>
        <div className="task-right">
          <button
            className="task-edit-button"
            type="button"
            onClick={() => setEstadoModal(!estadoModal)}
          >
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

      {estadoModal && (
        <Modal
          cerrarModal={cerrarModal}
          id={id}
          name={name}
          description={description}
          actualizarTarea={actualizarTarea}
        />
      )}
    </li>
  );
};

export default Task;
