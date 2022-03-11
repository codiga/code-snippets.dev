import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import SearchResultsProvider from "contexts/SearchResulstsProvider";
import Results from "components/search/Results";
import StaticLayout from "components/layout/StaticLayout";

const Search: NextPageWithLayout = () => {
  return (
    <SearchResultsProvider>
      <Results />
    </SearchResultsProvider>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <StaticLayout search>{page}</StaticLayout>;
};

export default Search;
