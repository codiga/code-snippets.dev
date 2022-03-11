import { createContext, PropsWithChildren } from "react";
import { Recipe } from "types/Recipe";
import { useContext } from "react";
import useRecipeById from "hooks/useRecipeById";

const RecipeContext = createContext<Recipe | null>(null);


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
