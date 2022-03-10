import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import RecipeSummary from "components/shared/recipe/RecipeSummary";
import { RecipeProvider } from "contexts/RecipeProvider";
import { Recipe } from "types/Recipe";

type ResultsProps = {
  selected?: Recipe;
  results?: Recipe[];
  onSelect: (recipe: Recipe) => void;
};

const Results = ({ selected, results, onSelect }: ResultsProps) => {
  const bg = useColorModeValue("brand.100", "brand.900");

  return (
    <Box
      w={296}
      bg={bg}
      flexShrink={0}
      d="flex"
      overflow="auto"
      flexDirection="column"
    >
      {results?.map((item) => (
        <RecipeProvider key={item.id} id={item.id}>
          <RecipeSummary
            selected={selected?.id == item.id}
            direction="column"
            onClick={() => onSelect(item)}
          />
        </RecipeProvider>
      ))}
    </Box>
  );
};

export default Results;
