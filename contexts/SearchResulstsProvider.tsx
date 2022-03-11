import { createContext, PropsWithChildren } from "react";
import { Recipe } from "types/Recipe";
import { useContext } from "react";
import useSnippetsResults from "hooks/useSnippetsResults";
import { View } from "types/Search";
import { Language } from "types/Language";

type SearchResultsContextType = {
  view: View;
  loading: boolean;
  language: Language | null;
  results: Recipe[] | null;
  fetchMoreSnippets: (page: number) => void;
};

const SearchResultsContext = createContext<SearchResultsContextType>({
  view: "list",
  loading: true,
  language: null,
  results: null,
  fetchMoreSnippets: () => {},
});

export const useSearchResultsContext = () => {
  return useContext(SearchResultsContext);
};

const SearchResultsProvider = ({ children }: PropsWithChildren<{}>) => {
  const { view, loading, language, results, fetchMoreSnippets } =
    useSnippetsResults();

  return (
    <SearchResultsContext.Provider
      value={{ view, loading, language, results, fetchMoreSnippets }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
};

export default SearchResultsProvider;
