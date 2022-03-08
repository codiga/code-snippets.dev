import { mode, SystemStyleFunction } from "@chakra-ui/theme-tools";

const gradientVariant: SystemStyleFunction = (props) => {
  return {
    color: mode("black", "white")(props),
    fontSize: 12,
    fontWeight: 700,
    fontFamily: props.theme.fonts.heading,
    padding: "8px 24px",
    borderRadius: "100px",
    display: "inline-block",
    position: "relative",
    boxSizing: "border-box",
    background: mode("brand.100", "brand.900")(props),
    border: "1px solid transparent",
    backgroundClip: "padding-box",

    _hover: {
      textDecoration: "none",
    },

    _before: {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -1,
      margin: "-1px",
      borderRadius: "inherit",
      backgroundImage: "linear-gradient(to bottom, #23A9F2, #00C543)",
    },
  };
};

export default gradientVariant;
