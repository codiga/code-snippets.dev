import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "pages/_app";
import Layout from "components/layout/Layout";
import useSnippetsResults from "hooks/useSnippetsResults";
import { Container } from "@chakra-ui/react";
import Paper from "components/shared/Paper";
import RecipeDetails from "components/shared/recipe/RecipeDetails";
import RecipeCode from "components/shared/recipe/RecipeCode";
import Results from "components/search/Results";
import { RecipeProvider } from "contexts/RecipeProvider";
import { Recipe } from "types/Recipe";
import ResultsSkeleton from "components/search/ResultsSkeleton";
import ResultsError from "components/search/ResultsError";
import { useRouter } from "next/router";
import ResultsFilters from "components/search/ResultsFilters";
import ResultsCards from "components/search/ResultsCards";

const Search: NextPageWithLayout = () => {
  const { query } = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [selected, setSelected] = useState<Recipe>();
  const { results, loading, error } = useSnippetsResults();

  useEffect(() => {
    if (!isReady && results?.length) {
      setSelected(results[0]);
      setIsReady(true);
    }
  }, [results, isReady]);

  const showRecipe = (recipe: Recipe) => {
    setSelected(recipe);
  };

  if (error) return <ResultsError />;

  return (
    <Container maxW="container.xl" my={{ base: 6, md: 14 }}>
      <ResultsFilters />

      {loading ? (
        <ResultsSkeleton />
      ) : query.view === "cards" ? (
        <ResultsCards results={results} />
      ) : (
        <Paper h="100%" d="flex" overflow="hidden">
          <Results
            results={results}
            selected={selected}
            onSelect={showRecipe}
          />
          {selected && (
            <RecipeProvider id={selected.id}>
              <RecipeCode />
              <RecipeDetails />
            </RecipeProvider>
          )}
        </Paper>
      )}
    </Container>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout search fullScreen>
      {page}
    </Layout>
  );
};

export default Search;
