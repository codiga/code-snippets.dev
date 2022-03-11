import {
  Box,
  Spinner,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Paper from "components/shared/Paper";
import RecipeCode from "components/shared/recipe/RecipeCode";
import RecipeDetails from "components/shared/recipe/RecipeDetails";
import RecipeSummary from "components/shared/recipe/RecipeSummary";
import { RecipeProvider } from "contexts/RecipeProvider";
import { useSearchResultsContext } from "contexts/SearchResulstsProvider";
import { useEffect, useRef, useState } from "react";
import { Recipe } from "types/Recipe";
import PerfectScrollbar from "perfect-scrollbar";
import InfiniteFetcher from "./InfiniteFetcher";

const ResultsList = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const bg = useColorModeValue("brand.100", "brand.900");
  const sm = useBreakpointValue({ base: true, md: false });

  const [selected, setSelected] = useState<Recipe | null>(null);
  const { loading, results, fetchMoreSnippets } = useSearchResultsContext();

  useEffect(() => {
    if (results?.length) {
      setSelected(results[0]);
    }
  }, [results]);

  useEffect(() => {
    if (listRef.current) {
      new PerfectScrollbar(listRef.current);
    }
  }, []);

  if (sm) {
    return (
      <VStack spacing={6} w="100%">
        {results?.map((item) => (
          <RecipeProvider key={item.id} id={item.id}>
            <Paper w="100%" overflow="hidden">
              <RecipeCode />
              <RecipeDetails />
            </Paper>
          </RecipeProvider>
        ))}
        <InfiniteFetcher callback={fetchMoreSnippets} />
      </VStack>
    );
  }

  return (
    <Paper h="100%" d="flex" overflow="hidden">
      <Box
        ref={listRef}
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
              onClick={() => setSelected(item)}
            />
          </RecipeProvider>
        ))}
        <InfiniteFetcher callback={fetchMoreSnippets} />
      </Box>
      {selected && (
        <RecipeProvider id={selected.id}>
          <RecipeCode />
          <RecipeDetails />
        </RecipeProvider>
      )}
    </Paper>
  );
};

export default ResultsList;
