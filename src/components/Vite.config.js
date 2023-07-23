import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import chakraUiResolver from "@chakra-ui/vite-plugin";

export default defineConfig({
  plugins: [reactRefresh(), chakraUiResolver()],
});
