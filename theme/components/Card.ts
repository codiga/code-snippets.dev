import { mode, SystemStyleFunction } from "@chakra-ui/theme-tools";

const outlineVariant: SystemStyleFunction = (props) => {
  return {
    zIndex: 1,
    position: "relative",
    border: "1px solid",
    borderColor: mode("blackAlpha.200", "#06041A")(props),
    backgroundColor: mode("white", "#0B091C")(props),
  };
};

const variants = {
  outline: outlineVariant,
};

const baseStyle = {
  padding: "32px",
  borderRadius: "8px",
};

const defaultProps = {
  variant: "outline",
};

const Paper = {
  baseStyle,
  variants,
  defaultProps,
};

export default Paper;
