import { useRecipeContext } from "contexts/RecipeProvider";

export default function useShareUrls() {
  const { language, id } = useRecipeContext() || {};

  const shareUrlRoot = process.env.NEXT_PUBLIC_SITE_URL;
  const directShareValue = `${shareUrlRoot}/hub/recipe/${id}/view`;
  const shareText = `Check%20out%20this%20@getcodiga%20recipe%20for%20${language}%20%23codiga%20%23cleancode`;
  const markdownShareValue = `[![View Recipe](${shareUrlRoot}/img/badge_view_recipe.png)](${directShareValue})`;
  const HTLMShareValue = `<a href="${shareUrlRoot}/hub/recipe/${id}/view"><img src="${directShareValue}" alt="View on Codiga"/></a>`;

  return {
    directShareValue,
    shareText,
    markdownShareValue,
    HTLMShareValue,
  };
}
