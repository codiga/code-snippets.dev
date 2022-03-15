import { createContext, PropsWithChildren } from "react";
import { Recipe, RecipeSummary } from "types/Recipe";
import { useContext } from "react";
import useRecipeById from "hooks/useRecipeById";

const RecipeContext = createContext<Recipe | null>(null);

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

type RecipeProviderProps = {
  id: number;
  skip?: boolean;
  staticRecipe?: Recipe | null;
};

export const RecipeProvider = ({
  id,
  children,
  skip = false,
  staticRecipe = null,
}: PropsWithChildren<RecipeProviderProps>) => {
  const { recipe } = useRecipeById(id, skip);

  const value = skip ? staticRecipe : recipe;

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
