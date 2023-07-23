import Header from "../components/Header";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import { useToDo } from "../hooks/useToDo";
import { Box, useColorModeValue } from "@chakra-ui/react";

// consultarTareas();

export default function TareasPage() {
  const backgroundColor = useColorModeValue(
    "light.background",
    "dark.background"
  );
  const {
    listaDeTareas,
    agregarTarea,
    eliminarTarea,
    cambiarEstadoTarea,
    actualizarTarea,
  } = useToDo();

  useEffect(() => {
    localStorage.setItem("listaDeTareas", JSON.stringify(listaDeTareas));
  }, [listaDeTareas]);

  const bgApp = useColorModeValue("AppLight", "AppDark");
  return (
    <Box
      className="TareasPage"
      bgColor={backgroundColor}
      bgImage="url(./assets/figuraFondo.svg)"
      bgRepeat="no-repeat"
      bgSize="150%"
      bgPosition="100% 50%"
      minH="100vh"
      pt="62px"
    >
      <Box className={`App ${bgApp}`}>
        <Header titulo="TaskMate App" />
        <Input agregarTarea={agregarTarea} />
      </Box>
      <div className={`App ${bgApp}`}>
        <TaskList
          listaDeTareas={listaDeTareas}
          eliminarTarea={eliminarTarea}
          cambiarEstadoTarea={cambiarEstadoTarea}
          actualizarTarea={actualizarTarea}
        />
      </div>
    </Box>
  );
}
