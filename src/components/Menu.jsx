import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="sobre-nosotros">Sobre Nosotros</Link>
      </li>
      <li>
        <Link to="tareas">Tareas</Link>
      </li>
    </ul>
  );
}

export default Menu;
