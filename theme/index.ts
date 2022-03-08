import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import styles from "./styles";
import fonts from "./foundations/fonts";
import colors from "./foundations/colors";
import * as components from "./components";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  fonts,
  colors,
  components: {
    ...components,
  },
});

export default theme;
