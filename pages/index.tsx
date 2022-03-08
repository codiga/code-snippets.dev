import Layout from "components/layout/Layout";
import PageTitle from "components/shared/PageTitle";
import SearchBox from "components/shared/search-box/SearchBox";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <PageTitle title="Code Snippet Search">
      <SearchBox autoFocus />
    </PageTitle>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
