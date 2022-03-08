import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

type PageProps = BoxProps;

const Paper = (props: PageProps) => {
  const shadow = useColorModeValue("md", "none");

  return <Box borderRadius={8} boxShadow={shadow} {...props} />;
};

export default Paper;
