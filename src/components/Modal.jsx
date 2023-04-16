import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";
import { useState } from "react";

export default function Modal(props) {
  const { cerrarModal, id, name, actualizarTarea } = props;
  const [nuevoNombreTarea, setNuevoNombreTarea] = useState(name);

  function enviarActualizacionTarea(ev) {
    ev.preventDefault();
    actualizarTarea(id, nuevoNombreTarea);
    cerrarModal();
  }

  return (
    <div className="contenedorGris">
      <div className="contenedorBlanco">
        <div className="modalHeader">
          <h2>Editar tarea: {name}</h2>
          <button className="botonCerrarModal" onClick={() => cerrarModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="modalBody">
          <form onSubmit={enviarActualizacionTarea}>
            <input
              type="text"
              placeholder="Nuevo nombre de la tarea"
              value={nuevoNombreTarea}
              onChange={(ev) => setNuevoNombreTarea(ev.target.value)}
            />
          </form>
        </div>
        <div className="modalFooter">
          <button onClick={() => cerrarModal()}>Cancelar</button>
          <button onClick={enviarActualizacionTarea}>Guardar</button>
        </div>
      </div>
    </div>
  );
}
