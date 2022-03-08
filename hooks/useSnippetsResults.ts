import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_PUBLIC_RECIPES_FULL } from "queries/recipes";
import { useEffect, useState } from "react";
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
  // const [tag, setTag] = useState("");
  // const [desc, setDesc] = useState(false);
  // const [orderBy, setOrderBy] = useState(RecipeSortingFields.Name);

  useEffect(() => {
    setName(getSingleQueryValue(query.q) || "");
    setPage(Number(getSingleQueryValue(query.page)) || 0);
    // setDesc(!!getSingleQueryValue(query.desc));
    // setOrderBy(
    //   (getSingleQueryValue(query.order) as RecipeSortingFields) ||
    //     RecipeSortingFields.Name
    // );
    // setTag(getSingleQueryValue(query.tag) || "");
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
      // desc,
      // tag: tag ? tag : undefined,
      // orderBy,
    },
  });

  return {
    loading,
    error,
    results: data?.assistantRecipesSemanticSearch,
  };
}
