import { SimpleGrid } from "@chakra-ui/react";
import RecipeCard from "components/shared/recipe/RecipeCard";
import { RecipeProvider } from "contexts/RecipeProvider";
import { useSearchResultsContext } from "contexts/SearchResulstsProvider";
import InfiniteFetcher from "./InfiniteFetcher";

const ResultsCards = () => {
  const { results, fetchMoreSnippets } = useSearchResultsContext();

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {results?.map((item) => (
        <RecipeProvider key={item.id} id={item.id}>
          <RecipeCard />
        </RecipeProvider>
      ))}
      <InfiniteFetcher callback={fetchMoreSnippets} />
    </SimpleGrid>
  );
};

export default ResultsCards;
