import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Input(props) {
  const { agregarTarea } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  function enviarTarea(dataFormulario) {
    agregarTarea(dataFormulario.nombreTarea);
    reset();
  }
  return (
    <form className="formularioNuevaTarea" onSubmit={handleSubmit(enviarTarea)}>
      <div className="contenedorNuevaTarea">
        <input
          className="inputNuevaTarea"
          type="text"
          placeholder="Agregar nueva tarea"
          {...register("nombreTarea", {
            minLength: {
              value: 3,
              message: "El nombre de la tarea debe ser mayor a 3 caracteres",
            },
          })}
        />
        <span className="error" role="alert">
          {errors.nombreTarea && errors.nombreTarea.message}
        </span>
      </div>
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}
