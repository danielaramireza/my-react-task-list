import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Avatar,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();

  const location = useLocation();
  console.log(location.pathname);
  let classNavBar;
  if (location.pathname == "/tareas") {
    classNavBar = "lightNav";
  } else {
    classNavBar = "darkNav";
  }
  return (
    <Breadcrumb className={classNavBar}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="sobre-nosotros">
          Sobre nosotros
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="tareas">
          Tareas
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Tooltip label="Hola, Daniela" fontSize="md">
          <Avatar name="Dan Abrahmov" src="./assets/avatar.jpg" size="sm" />
        </Tooltip>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button onClick={toggleColorMode}>
          Modo {colorMode === "light" ? "Oscuro" : "Claro"}
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default Menu;
