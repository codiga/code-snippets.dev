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

export function getSnippetUrl({ id, name, language }: Partial<Recipe>) {
  const slug = getSnippetSlug(name);
  const lang = language?.toLowerCase() || "unknown";

  return `/snippet/${lang}/${slug}/${id}`;
}

export function getRecipePath({ id, keywords }: Partial<Recipe>) {
  const divider = keywords && keywords.length > 0 ? `-` : "";

  return `/hub/recipe/${id}${divider}${keywords?.join("-")}/view`;
}

export function getRecipeUrl({ id, keywords }: Partial<Recipe>) {
  const path = getRecipePath({ id, keywords });
  return `${process.env.NEXT_PUBLIC_CODIGA_URL}${path}`;
}

export function getRecipeCommentUrl({ id, keywords }: Partial<Recipe>) {
  const path = getRecipePath({ id, keywords });
  return `${process.env.NEXT_PUBLIC_CODIGA_URL}/login?next=${path}`;
}