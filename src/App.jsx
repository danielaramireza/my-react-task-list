import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header titulo="Todo App" />
      <TaskList />
    </div>
  );
}

export default App;
