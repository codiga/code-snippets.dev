import Head from "next/head";

const GlobalMetadata = () => {
  return (
    <Head>
      <title>Snipt: Code Snippets Search Engine</title>
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
        content="Code Snippet Search Engine for 15+ languages. Search and reuse code snippets publicly."
      />

      <meta
        name="keywords"
        content="code snippet, code snippets, code assistant, coding assistant, search engine, snipt"
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

      <meta
        key="ogtitle"
        property="og:title"
        content="Snipt: Code Snippet Search Engine"
      />
      <meta
        key="ogdescription"
        property="og:description"
        content="Search, share and reuse code snippets for 15+ languages"
      />
      <meta
        key="ogimage"
        property="og:image"
        content="/social/open-graph.png"
      />
      <meta key="ogtype" property="og:type" content="website" />
      <meta key="ogurl" property="og:url" content="https://www.snipt.dev/" />
      <meta key="oglocale" property="og:locale" content="en_US" />

      <meta
        key="twitterName"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitterSite" name="twitter:site" content="@getcodiga" />
      <meta key="twitterCreator" name="twitter:creator" content="@getcodiga" />
      <meta
        key="twitterTitle"
        name="twitter:title"
        content="Snipt: Code Snippet Search Engine"
      />
      <meta
        key="twitterDescription"
        name="twitter:description"
        content="Search, share and reuse code snippets for 15+ languages."
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content="https://www.snipt.dev/social/open-graph.png"
      />
    </Head>
  );
};

export default GlobalMetadata;
