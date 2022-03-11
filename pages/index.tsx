import HomeLayout from "components/layout/HomeLayout";
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
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
