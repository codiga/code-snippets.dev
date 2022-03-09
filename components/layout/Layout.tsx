import { Box } from "@chakra-ui/react";
import Footer from "components/footer/Footer";
import Header, { HeaderProps } from "components/header/Header";
import Head from "next/head";
import { PropsWithChildren } from "react";

type LayoutProps = HeaderProps & {
  fullScreen?: boolean;
};

const Layout = ({
  search = false,
  fullScreen = false,
  children,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Head>
        <title>Code Snippets</title>
        <meta
          key="charset"
          httpEquiv="content-type"
          content="text/html;charset=utf-8"
        />
        <meta
          key="contentLanguaje"
          httpEquiv="content-language"
          content="en-us"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Code Snippets for 15+ languages. Search and reuse code snippets publicly."
        />

        <meta
          name="keywords"
          content="code snippet, code snippets, code assistant, coding assistant"
        />

        <meta key="distribution" name="distribution" content="global" />
        <meta key="resourceType" name="resource-type" content="document" />
        <meta key="audience" name="Audience" content="All" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <meta property="og:title" content="Code Snippets" />
        <meta
          property="og:description"
          content="Code Snippets for 15+ languages. Search and reuse code snippets publicly."
        />
        <meta property="og:image" content="/social/open-graph.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://code-snippets.dev/" />
        <meta property="og:locale" content="en_US" />

        <meta
          key="twitterName"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitterSite" name="twitter:site" content="@getcodiga" />
        <meta
          key="twitterCreator"
          name="twitter:creator"
          content="@getcodiga"
        />
        <meta key="twitterTitle" name="twitter:title" content="Code Snippets" />
        <meta
          key="twitterDescription"
          name="twitter:description"
          content="Code Snippets for 15+ languages. Search and reuse code snippets publicly."
        />
        <meta
          key="twitterImage"
          name="twitter:image"
          content="https://code-snippets.dev/social/open-graph.png"
        />
      </Head>
      <Header search={search} />
      <Box as="main" flexDir={fullScreen ? "row" : "column"}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
