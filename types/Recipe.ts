import { Comment } from "./Comment";
import { Language } from "./Language";

export type Recipe = {
  id: number;
  language: Language;
  name?: string;
  description?: string;
  tags?: string[];
  imports?: string[];
  uses?: number;
  keywords?: string[];
  averageRating?: number;
  comments?: Comment[];
  commentsCount?: number;
  presentableFormat?: string;
};

export type RecipeSummary = Pick<
  Recipe,
  "id" | "name" | "language" | "uses" | "averageRating" | "tags"
>;

export enum RecipeSortingFields {
  Language = "Language",
  Name = "Name",
  Timestamp = "CreationTimestamp",
  Visibility = "Visibility",
  Privacy = "Privacy",
  Rating = "Rating",
  Uses = "Uses",
  Cookbook = "Cookbook",
}

export type RecipeOrderBy =
  | RecipeSortingFields.Language
  | RecipeSortingFields.Name
  | RecipeSortingFields.Timestamp
  | RecipeSortingFields.Visibility
  | RecipeSortingFields.Privacy
  | RecipeSortingFields.Rating
  | RecipeSortingFields.Uses
  | RecipeSortingFields.Cookbook;

export type GetPublicRecipesVariables = {
  howmany: number;
  skip: number;
  term?: string | null;
  languages?: Language[] | null;
  onlyPublic?: boolean;
};

export type GetSemanticPublicRecipesData = {
  assistantRecipesSemanticSearch: Recipe[];
};

export type GetPublicRecipeVariables = {
  id: number;
  howmanycomments: number;
  skipcomments: number;
};

export type GetPublicRecipeData = {
  assistantPublicRecipe: Recipe;
};
