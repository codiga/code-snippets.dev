import { Box, HStack, LinkBox } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import { getSnippetSlug, getSnippetUrl } from "lib/snippets";
import Paper from "../Paper";
import RecipeCode from "./RecipeCode";
import RecipeStats from "./RecipeStats";
import RecipeTags from "./RecipeTags";
import RecipeTitle from "./RecipeTitle";

const RecipeCard = () => {
  const recipe = useRecipeContext() || {};

  const url = getSnippetUrl(recipe);

  return (
    <LinkBox as="article">
      <Paper h={245} overflow="hidden" d="flex" flexDir="column">
        <RecipeCode removeScroll flexGrow={2} p={3} />
        <Box bg="#21252B" d="flex" justifyContent="space-between" p={3}>
          <HStack>
            <RecipeTitle />
            <RecipeTags />
          </HStack>
          <RecipeStats />
        </Box>
      </Paper>
    </LinkBox>
  );
};

export default RecipeCard;
