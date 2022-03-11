import { Container } from "@chakra-ui/react";
import { useSearchResultsContext } from "contexts/SearchResulstsProvider";
import ResultsCards from "./ResultsCards";
import ResultsFilters from "./ResultsFilters";
import ResultsList from "./ResultsList";
import ResultsEmpty from "./ResultsEmpty";
import ResultsSkeleton from "./ResultsSkeleton";

const Results = () => {
  const { view, loading, results } = useSearchResultsContext();

  return (
    <Container maxW="100%" my={{ base: 6, md: 14 }}>
      <ResultsFilters />

      {loading ? (
        <ResultsSkeleton />
      ) : !results?.length ? (
        <ResultsEmpty />
      ) : view === "cards" ? (
        <ResultsCards />
      ) : (
        <ResultsList />
      )}
    </Container>
  );
};

export default Results;
