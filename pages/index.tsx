import { Box } from "@chakra-ui/react";
import HomeLayout from "components/layout/HomeLayout";
import PageTitle from "components/shared/PageTitle";
import SearchBox from "components/shared/search-box/SearchBox";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <PageTitle title="Code Snippet Search">
      <SearchBox autoFocus />
      <Box w="100%" my={8} textAlign="center">
        <Box
          as="a"
          d="inline-block"
          href="https://www.producthunt.com/posts/snipt-dev?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-snipt&#0045;dev"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=338490&theme=dark&period=daily"
            alt="snipt&#0046;dev - Search&#0032;engine&#0032;for&#0032;code&#0032;snippets | Product Hunt"
            width="250"
            height="54"
          />
        </Box>
      </Box>
    </PageTitle>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
