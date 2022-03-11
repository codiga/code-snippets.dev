import { Box, useColorModeValue } from "@chakra-ui/react";
import RecipeCallToAction from "./RecipeCallToAction";
import RecipeComments from "./RecipeComments";
import RecipeSummary from "./RecipeSummary";

const RecipeDetails = () => {
  const bg = useColorModeValue("brand.100", "brand.900");

  return (
    <Box
      maxW={{ base: "100%", md: 340 }}
      bg={bg}
      flexShrink={0}
      d="flex"
      flexDirection="column"
    >
      <RecipeSummary big link direction="column" />
      <RecipeComments />
    </Box>
  );
};

export default RecipeDetails;
