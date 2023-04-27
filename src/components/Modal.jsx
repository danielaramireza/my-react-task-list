import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";
import { useForm } from "react-hook-form";

export default function Modal(props) {
  const { cerrarModal, id, name, description, actualizarTarea } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  function enviarActualizacionTarea(dataFormulario) {
    actualizarTarea(id, dataFormulario.nombreTarea, dataFormulario.descripcion);
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
          <form onSubmit={handleSubmit(enviarActualizacionTarea)}>
            <input
              className="inputNombreTareaModal"
              type="text"
              placeholder="Nuevo nombre de la tarea"
              defaultValue={name}
              {...register("nombreTarea", {
                required: true,
                minLength: {
                  value: 3,
                  message:
                    "El nombre de la tarea debe tener mínimo 3 caracteres",
                },
              })}
            />
            <span className="error" role="alert">
              {errors.nombreTarea && errors.nombreTarea.message}
            </span>
            <textarea
              rows="3"
              placeholder="Agrega una descripción de tu tarea"
              defaultValue={description}
              {...register("descripcion")}
            ></textarea>
          </form>
        </div>
        <div className="modalFooter">
          <button className="botonCancelarModal" onClick={() => cerrarModal()}>
            Cancelar
          </button>
          <button
            className="botonGuardarModal"
            onClick={handleSubmit(enviarActualizacionTarea)}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
