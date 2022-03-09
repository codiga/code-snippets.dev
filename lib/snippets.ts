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
