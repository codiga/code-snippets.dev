import { mode, SystemStyleFunction } from "@chakra-ui/theme-tools";

const snippetVariant: SystemStyleFunction = (props) => {
  return {
    container: {
      border: "1px solid",
      borderRadius: "100px",
      borderColor: mode("#EFF1F5", "white")(props),
      backgroundColor: mode("#EFF1F5", "transparent")(props),
      padding: "4px 8px",
      height: "22px",
    },
  };
};

const variants = {
  snippet: snippetVariant,
};

const Tag = {
  variants,
};

export default Tag;
