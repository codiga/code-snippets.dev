import { Box, Link, LinkBox, Text } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import useShareUrls from "hooks/useShareUrls";
import { Recipe } from "types/Recipe";
import RecipeStats from "./RecipeStats";
import RecipeTags from "./RecipeTags";
import RecipeTitle from "./RecipeTitle";

type RecipeSummaryProps = {
  big?: boolean;
  link?: boolean;
  selected?: boolean;
  direction?: "row" | "column";
  onClick?: () => void;
};

const RecipeSummary = ({
  big = false,
  link = false,
  selected = false,
  direction = "row",
  onClick = () => {},
}: RecipeSummaryProps) => {
  const { description } = useRecipeContext() || {};
  const { directShareValue } = useShareUrls();

  const row = direction === "row";

  return (
    <Box
      d="flex"
      flexDirection={direction}
      justifyContent={row ? "space-between" : "flex-start"}
      p={4}
      borderBottom="1px solid"
      borderBottomColor="whiteAlpha.200"
      onClick={onClick}
      bg={selected ? "brandBlue.100" : "transparent"}
    >
      <RecipeTitle link={link} />

      <Box d="flex" flexDirection={direction}>
        <RecipeStats mt={row ? 0 : 4} />
        <RecipeTags mt={row ? 0 : 4} />
      </Box>
      {big && (
        <>
          <Link href={directShareValue} mt={row ? 0 : 4} fontSize="sm">
            View Recipe on Codiga.io
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
