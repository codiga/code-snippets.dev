import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import Layout from "components/layout/Layout";
import SearchResultsProvider from "contexts/SearchResulstsProvider";
import Results from "components/search/Results";

const Search: NextPageWithLayout = () => {
  return (
    <SearchResultsProvider>
      <Results />
    </SearchResultsProvider>
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
