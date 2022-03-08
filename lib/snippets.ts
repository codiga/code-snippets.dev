import { Recipe } from "types/Recipe";

export function getSnippetSlug(name: string | undefined) {
  if (name) {
    return name.toLowerCase()?.replaceAll(" ", "-");
  }

  return "";
}

export function getSnippetUrl({ id, name }: Partial<Recipe>) {
  const slug = getSnippetSlug(name);

  return `/snippet/${slug}/${id}`;
}
