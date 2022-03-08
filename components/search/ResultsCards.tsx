import { SimpleGrid } from "@chakra-ui/react";
import RecipeCard from "components/shared/recipe/RecipeCard";
import { RecipeProvider } from "contexts/RecipeProvider";
import { Recipe } from "types/Recipe";

type ResultsProps = {
  results?: Recipe[];
};

const ResultsCards = ({ results }: ResultsProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {results?.map((item) => (
        <RecipeProvider key={item.id} id={item.id}>
          <RecipeCard />
        </RecipeProvider>
      ))}
    </SimpleGrid>
  );
};

export default ResultsCards;
