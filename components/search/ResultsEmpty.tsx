import { Box, useColorModeValue } from "@chakra-ui/react";
import Paper from "components/shared/Paper";

const ResultsEmpty = () => {
  const bg = useColorModeValue("brand.100", "brand.900");

  return (
    <Paper h="100%" d="flex" overflow="hidden">
      <Box bg={bg} d="flex" flexGrow="2" justifyContent="center" alignItems="center">🔎 No code snippets to match your criteria</Box>
    </Paper>
  );
};

export default ResultsEmpty;
