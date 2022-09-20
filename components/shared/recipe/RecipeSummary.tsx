import { Box, Link, LinkBox, Text } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import useShareUrls from "hooks/useShareUrls";
import { getRecipeUrl } from "lib/snippets";
import { Recipe } from "types/Recipe";
import RecipeStats from "./RecipeStats";
import RecipeTags from "./RecipeTags";
import RecipeTitle from "./RecipeTitle";

type RecipeSummaryProps = {
  big?: boolean;
  link?: boolean;
  selected?: boolean;
  direction?: "row" | "column";
};

const RecipeSummary = ({
  big = false,
  link = false,
  selected = false,
  direction = "row",
}: RecipeSummaryProps) => {
  const { id, keywords, description } = useRecipeContext() || {};
  const codigaRecipeUrl = getRecipeUrl({ id, keywords });

  const row = direction === "row";

  return (
    <Box
      p={4}
      d="flex"
      flexDirection={direction}
      justifyContent={row ? "space-between" : "flex-start"}
      borderBottom="1px solid"
      borderBottomColor="whiteAlpha.200"
      bg={selected ? "brandBlue.100" : "transparent"}
    >
      <RecipeTitle link={link} />

      <Box d="flex" flexDirection={direction}>
        <RecipeTags mt={row ? 0 : 4} />
      </Box>
      {big && (
        <>
          <Link href={codigaRecipeUrl} mt={row ? 0 : 4} fontSize="sm">
            View Snippet on Codiga.io
          </Link>
          <Text fontSize="sm" mt={row ? 0 : 4}>
            {description}
          </Text>
        </>
      )}
    </Box>
  );
};

export default RecipeSummary;
