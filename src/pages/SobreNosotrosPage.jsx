import Header from "../components/Header";
function SobreNosotrosPage() {
  return (
    <div className="contenedorSobreNosotros">
      <div className="contenedorDescripcion">
        <Header titulo={"Sobre Nosotros"} />
        <p>
          Nuestra aplicación TaskMate es fácil de usar y está diseñada para
          ayudarte a organizar tu vida diaria. Ya sea que estés en el trabajo,
          en la escuela o simplemente en casa, nuestra aplicación es perfecta
          para cualquier persona que quiera simplificar su vida y tener una
          mejor gestión de tiempo.
        </p>
        <p>
          Con TaskMate, puedes agregar, editar y eliminar la tarea y su
          respectiva descripción con facilidad. También puedes marcar las tareas
          completadas o pendientes con solo hacer clic en un simple checkbox.
          Además, todo lo que haces se guarda automáticamente en el
          almacenamiento local, ¡así que no te preocupes por perder tus cambios!
        </p>
        <p>
          La aplicación fue desarrollada utilizando React. De la misma manera,
          se usaron diversas librerías y componentes de React tales como
          React-Hooks, React-Hook-Form, React-Router-Dom, Chakra UI para mejorar
          la funcionalidad y la apariencia de la misma.
        </p>
      </div>
      <div className="contenedorImagen">
        <img
          src="./assets/undraw_To_do_list_re_9nt7.png"
          alt="Imagen de una lista de tareas"
        ></img>
      </div>
    </div>
  );
}

export default SobreNosotrosPage;
