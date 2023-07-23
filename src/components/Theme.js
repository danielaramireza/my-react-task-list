import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    light: {
      background: "#FFFFFF",
      text: "rgb(26, 32, 44)",
    },
    dark: {
      background: "rgb(26, 32, 44)",
      text: "#FFFFFF",
    },
  },
});

export default theme;
