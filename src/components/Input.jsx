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
    agregarTarea(dataFormulario.nombreTarea, dataFormulario.descripcion);
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
            required: true,
            minLength: {
              value: 3,
              message: "El nombre de la tarea debe tener mínimo 3 caracteres",
            },
          })}
        />
        <span className="error" role="alert">
          {errors.nombreTarea && errors.nombreTarea.message}
        </span>
        <textarea
          rows="3"
          placeholder="Agrega una descripción de tu tarea"
          {...register("descripcion")}
        ></textarea>
      </div>
      <button type="submit">Agregar tarea</button>
    </form>
  );
}
