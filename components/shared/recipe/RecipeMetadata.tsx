import { useRecipeContext } from "contexts/RecipeProvider";
import { getSnippetUrl } from "lib/snippets";
import Head from "next/head";

const RecipeMetadata = () => {
  const { id, name, description, language, keywords } =
    useRecipeContext() || {};

  const title = `Snipt - Code Snippet - ${name}`;
  const metaDescription = `Code Snippet in ${language}: ${description}`;
  const openGraphDescription = `${language}: ${name}`;
  const url = getSnippetUrl({ id, name, language });

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

      <meta
        key="ogtitle"
        property="og:title"
        content="Snipt: Code Snippet Search Engine"
      />
      <meta
        key="ogdescription"
        property="og:description"
        content={openGraphDescription}
      />
      <meta
        key="ogimage"
        property="og:image"
        content={`https://image.codiga.io/api/generate/production/snipt/${id}/dark`}
      />
      <meta key="ogtype" property="og:type" content="website" />
      <meta key="ogurl" property="og:url" content={url} />
      <meta key="oglocale" property="og:locale" content="en_US" />

      <meta
        key="twitterName"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" content="@getcodiga" />
      <meta key="twitterCreator" name="twitter:creator" content="@getcodiga" />
      <meta
        key="twitterTitle"
        name="twitter:title"
        content="Snipt: Code Snippet Search Engine"
      />
      <meta
        key="twitterDescription"
        name="twitter:description"
        content={openGraphDescription}
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content={`https://image.codiga.io/api/generate/production/snipt/${id}/dark`}
      />
    </Head>
  );
};

export default RecipeMetadata;
