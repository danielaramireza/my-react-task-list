import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [listaDeTareas, setListaDeTareas] = useState([]);

  function agregarTarea(nombreTarea) {
    console.log(nombreTarea);
  }

  return (
    <div className="App">
      <Header titulo="Todo App" />
      <Input agregarTarea={agregarTarea} />
      <TaskList listaDeTareas={listaDeTareas} />
    </div>
  );
}

export default App;
