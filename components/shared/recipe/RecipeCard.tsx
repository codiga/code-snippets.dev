import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import Paper from "../Paper";
import RecipeCode from "./RecipeCode";
import RecipeStats from "./RecipeStats";
import RecipeTags from "./RecipeTags";
import RecipeTitle from "./RecipeTitle";

const RecipeCard = () => {
  const bg = useColorModeValue("brand.100", "brand.900");
  return (
    <Paper h={245} overflow="hidden" d="flex" flexDir="column">
      <RecipeCode removeScroll flexGrow={2} />
      <Box bg={bg} d="flex" justifyContent="space-between" p={3}>
        <HStack>
          <RecipeTitle link />
          <RecipeTags />
        </HStack>
        <RecipeStats />
      </Box>
    </Paper>
  );
};

export default RecipeCard;
