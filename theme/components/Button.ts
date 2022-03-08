import { mode, SystemStyleFunction } from "@chakra-ui/theme-tools";
import gradientVariant from "./common";

const shareVariant: SystemStyleFunction = (props) => {
  return {
    ...gradientVariant(props),
    background: mode("white", "brand.500")(props),
    borderRadius: "4px",
    fontSize: "12px",
    padding: "6px 8px",
  };
};

const variants = {
  share: shareVariant,
};

const Link = {
  variants,
};

export default Link;
