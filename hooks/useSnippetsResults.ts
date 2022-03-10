import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_PUBLIC_RECIPES_FULL } from "queries/recipes";
import { useEffect, useState } from "react";
import { ALL_LANGUAGES, Language } from "types/Language";
import {
  GetPublicRecipesFullData,
  GetPublicRecipesVariables,
  // RecipeSortingFields,
} from "types/Recipe";

const HOWMANY = 100;

function getSingleQueryValue(value: string | string[] | undefined) {
  if (!value) return undefined;

  return Array.isArray(value) ? value[0] : value;
}

export default function useSnippetsResults() {
  const { query, isReady } = useRouter();

  const [page, setPage] = useState(0);
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    setName(getSingleQueryValue(query.q) || "");
    setPage(Number(getSingleQueryValue(query.page)) || 0);
    setLanguage(getSingleQueryValue(query.lang) || "");
  }, [query]);

  const { data, loading, error } = useQuery<
    GetPublicRecipesFullData,
    GetPublicRecipesVariables
  >(GET_PUBLIC_RECIPES_FULL, {
    skip: !isReady,
    variables: {
      howmany: HOWMANY,
      skip: page * HOWMANY,
      term: name || null,
      onlyPublic: true,
      languages: language ? [language as Language] : null,
    },
  });

  return {
    loading,
    error,
    results: data?.assistantRecipesSemanticSearch,
  };
}
