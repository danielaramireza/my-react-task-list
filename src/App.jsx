import "./App.css";
import "./Pages.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TareasPage from "./pages/TareasPage";
import SobreNosotrosPage from "./pages/SobreNosotrosPage";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="tareas" element={<TareasPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
