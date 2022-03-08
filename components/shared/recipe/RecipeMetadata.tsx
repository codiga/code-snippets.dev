import { useRecipeContext } from "contexts/RecipeProvider";
import Head from "next/head";

const RecipeMetadata = () => {
  const { name, description, language, keywords } = useRecipeContext() || {};

  return (
    <Head>
      <title>Code Snippets: {name}</title>

      <meta
        name="description"
        content={`Code Snippet in ${language}: ${description}`}
      />

      <meta
        name="keywords"
        content={`code snippet, code snippets, code assistant, ${keywords?.join(
          ", "
        )}`}
      />

      <meta property="og:title" content="Code Snippets" />
      <meta
        property="og:description"
        content="Code Snippets for 15+ languages. Search and reuse code snippets publicly."
      />
      <meta property="og:image" content="/social/open-graph.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codiga.io/" />
      <meta property="og:locale" content="en_US" />

      <meta
        key="twitterName"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitterSite" name="twitter:site" content="@getcodiga" />
      <meta key="twitterCreator" name="twitter:creator" content="@getcodiga" />
      <meta key="twitterTitle" name="twitter:title" content="Code Snippets" />
      <meta
        key="twitterDescription"
        name="twitter:description"
        content="Code Snippets for 15+ languages. Search and reuse code snippets publicly."
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content="https://codiga.io/social/open-graph.png"
      />
    </Head>
  );
};

export default RecipeMetadata;
