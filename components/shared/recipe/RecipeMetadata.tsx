import { useRecipeContext } from "contexts/RecipeProvider";
import { getSnippetUrl } from "lib/snippets";
import Head from "next/head";

const RecipeMetadata = () => {
  const { id, name, description, language, keywords } =
    useRecipeContext() || {};

  const title = `Code Snippets: ${name}`;
  const metaDescription = `Code Snippet in ${language}: ${description}`;
  const url = getSnippetUrl({ id, name });

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={metaDescription} />

      <meta
        name="keywords"
        content={`code snippet, code snippets, code assistant, ${keywords?.join(
          ", "
        )}`}
      />

      <meta property="og:title" content="Code Snippets" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content="/social/open-graph-snippets.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
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
        content={metaDescription}
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content="https://code-snippets.dev/social/open-graph-snippets.png"
      />
    </Head>
  );
};

export default RecipeMetadata;
