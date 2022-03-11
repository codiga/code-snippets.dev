import { useLazyQuery } from "@apollo/client";
import { GET_SEMANTIC_PUBLIC_RECIPES } from "queries/recipes";
import {
  GetSemanticPublicRecipesData,
  GetPublicRecipesVariables,
} from "types/Recipe";

export default function useSnippetsSummary() {
  const [fetchSnippetsSummary] = useLazyQuery<
    GetSemanticPublicRecipesData,
    GetPublicRecipesVariables
  >(GET_SEMANTIC_PUBLIC_RECIPES);

  return fetchSnippetsSummary;
}
