import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Input(props) {
  const { agregarTarea } = props;
  const [nombreTarea, setNombreTarea] = useState("");

  function enviarTarea(event) {
    event.preventDefault();
    if (nombreTarea.length < 1) {
      return;
    }
    agregarTarea(nombreTarea);
    setNombreTarea("");
  }
  return (
    <form onSubmit={enviarTarea}>
      <input
        type="text"
        name=""
        id=""
        value={nombreTarea}
        onChange={(ev) => setNombreTarea(ev.target.value)}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}
