import { createContext, PropsWithChildren } from "react";
import { Recipe } from "types/Recipe";

const RecipeContext = createContext<Recipe | null>(null);

import { useContext } from "react";
import useRecipeById from "hooks/useRecipeById";

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

type RecipeProviderProps = {
  id: number;
};

export const RecipeProvider = ({
  id,
  children,
}: PropsWithChildren<RecipeProviderProps>) => {
  const { recipe } = useRecipeById(id);

  return (
    <RecipeContext.Provider value={recipe}>{children}</RecipeContext.Provider>
  );
};
