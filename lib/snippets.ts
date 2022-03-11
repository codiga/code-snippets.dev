import { Recipe } from "types/Recipe";

export function getSnippetSlug(name: string | undefined, divider = "-") {
  if (name) {
    return name
      .toLowerCase()
      .replace(/ /g, divider)
      .replace(/&/g, divider)
      .replace(/</g, divider)
      .replace(/>/g, divider)
      .replace(/\//g, divider)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  return "";
}

export function getSnippetUrl({ id, name }: Partial<Recipe>) {
  const slug = getSnippetSlug(name);

  return `/snippet/${slug}/${id}`;
}

export function getRecipeUrl({ id, keywords }: Partial<Recipe>) {
  const divider = keywords && keywords.length > 0 ? `-` : "";

  return `${process.env.NEXT_PUBLIC_CODIGA_URL}/hub/recipe/${id}${divider}${keywords?.join(
    "-"
  )}/view`;
}
