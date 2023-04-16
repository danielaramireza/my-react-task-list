import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";

function App() {
  const [listaDeTareas, setListaDeTareas] = useState([]);

  return (
    <div className="App">
      <Header titulo="Todo App" />
      <TaskList listaDeTareas={listaDeTareas} />
    </div>
  );
}

export default App;
