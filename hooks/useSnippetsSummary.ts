import { useLazyQuery } from "@apollo/client";
import { GET_PUBLIC_RECIPES_SUMMARY } from "queries/recipes";
import {
  GetPublicRecipesSummaryData,
  GetPublicRecipesVariables,
} from "types/Recipe";

export default function useSnippetsSummary() {
  const [fetchSnippetsSummary] = useLazyQuery<
    GetPublicRecipesSummaryData,
    GetPublicRecipesVariables
  >(GET_PUBLIC_RECIPES_SUMMARY);

  return fetchSnippetsSummary;
}
