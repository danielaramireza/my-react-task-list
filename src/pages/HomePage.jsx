import Header from "../components/Header";

function HomePage() {
  return (
    <div className="contenedorHome">
      <div className="contenedorIzquierdoHome">
        <Header titulo={"Home"} />
        <h2>Bienvenido a TaskMate</h2>
      </div>
      <div className="contenedorDerechoHome">
        <img
          src="./assets/imagen-home.png"
          alt="Imagen de una lista de tareas"
        ></img>
      </div>
    </div>
  );
}

export default HomePage;
