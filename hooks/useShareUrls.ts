import { useColorMode } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import { getRecipeUrl, getSnippetUrl } from "lib/snippets";

export default function useShareUrls() {
  const { language, id, name, keywords } = useRecipeContext() || {};
  const { colorMode } = useColorMode();

  const shareUrlRoot = process.env.NEXT_PUBLIC_SITE_URL;
  const url = getSnippetUrl({ id, name });
  const directShareValue = `${shareUrlRoot}${url}`;
  const badge = `${shareUrlRoot}/social/share-badge-${
    colorMode === "light" ? "white" : "black"
  }.png`;
  const shareText = `Check%20out%20this%20code%20snippet%20for%20${language}%20%23cleancode`;
  const markdownShareValue = `[![View Snippet](${badge})](${directShareValue})`;
  const HTLMShareValue = `<a href="${directShareValue}"><img src="${badge}" alt="View on Code Snippets"/></a>`;

  return {
    directShareValue,
    shareText,
    markdownShareValue,
    HTLMShareValue,
  };
}
