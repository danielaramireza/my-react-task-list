import Header from "../components/Header";
import { Box, Text, Image } from "@chakra-ui/react";

function SobreNosotrosPage() {
  return (
    <Box
      bgColor="white"
      display="flex"
      minH="100vh"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-around"
      bgImage="url(./assets/figuraFondoBlanco.svg)"
      bgRepeat="no-repeat"
      bgSize={{ base: "500%", md: "150%" }}
      bgPosition={{ base: "63% 48%", md: "100% 50%" }}
      pt={{ base: "62px", md: "0" }}
      pb={{ base: "2rem", md: "0" }}
    >
      <Box
        className="contenedorDescripcion"
        mx="20px"
        maxW={{ base: "90%", md: "45vw" }}
        p={{ base: "1rem", md: "0" }}
      >
        <Header titulo={"Acerca de TaskMate"} />
        <Text mt="20px" color="black" fontFamily="inherit" textAlign="left">
          Nuestra aplicación es fácil de usar y está diseñada para ayudarte a
          organizar tu vida diaria. Ya sea que estés en el trabajo, en la
          escuela o simplemente en casa, es perfecta para cualquier persona que
          quiera simplificar su vida y tener una mejor gestión de tiempo.
        </Text>
        <Text mt="20px" color="black" fontFamily="inherit" textAlign="left">
          Con TaskMate, puedes agregar, editar y eliminar una tarea y su
          respectiva descripción con facilidad. También puedes marcar las tareas
          completadas o pendientes con solo hacer clic en un simple checkbox.
          Además, todo lo que haces se guarda automáticamente en el
          almacenamiento local, ¡Así que no te preocupes por perder tus cambios!
        </Text>

        <Text mt="20px" color="black" fontFamily="inherit" textAlign="left">
          La aplicación fue desarrollada en ReactJs. De la misma manera, se
          utilizaron diversas librerías y componentes de esta tecnología tales
          como React-Hooks, React-Hook-Form, React-Router-Dom y Chakra UI con el
          fin de mejorar la funcionalidad y la apariencia de la misma.
        </Text>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mr="20px">
        <Image
          src="./assets/imagenAcerca.png"
          alt="Imagen de una lista de tareas"
          maxW={{ base: "90%", md: "35vw" }}
        ></Image>
      </Box>
    </Box>
  );
}

export default SobreNosotrosPage;
