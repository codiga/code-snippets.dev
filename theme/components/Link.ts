import { mode, SystemStyleFunction } from "@chakra-ui/theme-tools";
import gradientVariant from "./common";

const navVariant: SystemStyleFunction = (props) => {
  return {
    color: mode("black", "white")(props),
    padding: 2,
    fontWeight: 700,
    fontFamily: props.theme.fonts.heading,
    borderRadius: "100px",

    _hover: {
      textDecoration: "none",
    },

    _focus: {
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    },
  };
};

const navSelectedVariant: SystemStyleFunction = (props) => {
  return {
    ...navVariant(props),
    color: "brandBlue.100",
  };
};

const variants = {
  nav: navVariant,
  navSelected: navSelectedVariant,
  gradient: gradientVariant,
};

const baseStyle = {
  color: "brandBlue.100",
};

const Link = {
  baseStyle,
  variants,
};

export default Link;
