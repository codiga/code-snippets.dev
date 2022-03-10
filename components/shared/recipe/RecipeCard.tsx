import { Box, HStack } from "@chakra-ui/react";
import Paper from "../Paper";
import RecipeCode from "./RecipeCode";
import RecipeStats from "./RecipeStats";
import RecipeTags from "./RecipeTags";
import RecipeTitle from "./RecipeTitle";

const RecipeCard = () => {
  return (
    <Paper h={245} overflow="hidden" d="flex" flexDir="column">
      <RecipeCode removeScroll flexGrow={2} p={3} />
      <Box bg="#21252B" d="flex" justifyContent="space-between" p={3}>
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
