import Header from "../components/Header";
import { Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";

function HomePage() {
  const backgroundColor = useColorModeValue(
    "light.background",
    "dark.background"
  );

  return (
    <Box
      bgColor={backgroundColor}
      minH="100vh"
      display={{ base: "flex", md: "grid" }}
      flexDirection="column"
      justifyContent="space-evenly;"
      gridTemplateColumns="repeat(2, 1fr)"
      alignItems={{ base: "start", md: "center" }}
      bgImage="url(./assets/figuraFondo.svg)"
      bgRepeat="no-repeat"
      bgSize={{ base: "500%", md: "150%" }}
      bgPosition={{ base: "70% 46%", md: "100% 50%" }}
    >
      <Box
        className="contenedorIzquierdoHome"
        p="2rem"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Header titulo={"TaskMate"} />
        <Heading as="h2" color="white" fontSize="2rem" textAlign="left">
          Bienvenid@
        </Heading>
      </Box>
      <Box className="contenedorDerechoHome">
        <Image
          src="./assets/imagen-home.png"
          alt="Imagen de una lista de tareas"
          w="600px"
          objectFit="contain"
        ></Image>
      </Box>
    </Box>
  );
}

export default HomePage;
