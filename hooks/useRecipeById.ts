import { ApolloError, useQuery } from "@apollo/client";
import { GET_PUBLIC_RECIPE_BY_ID } from "queries/recipes";
import {
  GetPublicRecipeData,
  GetPublicRecipeVariables,
  Recipe,
} from "types/Recipe";

type UserRecipeById = {
  loading: boolean;
  error: ApolloError | undefined;
  recipe: Recipe | null;
  skip?: boolean;
};

export default function useRecipeById(
  id: number,
  skip = false
): UserRecipeById {
  const { data, loading, error } = useQuery<
    GetPublicRecipeData,
    GetPublicRecipeVariables
  >(GET_PUBLIC_RECIPE_BY_ID, {
    skip,
    variables: { id, howmanycomments: 100, skipcomments: 0 },
  });

  return { loading, error, recipe: data?.assistantPublicRecipe || null };
}
