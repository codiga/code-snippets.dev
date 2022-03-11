import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_SEMANTIC_PUBLIC_RECIPES } from "queries/recipes";
import {
  GetSemanticPublicRecipesData,
  GetPublicRecipesVariables,
} from "types/Recipe";
import useSearchQueryParams from "./useSearchQueryParams";

const HOWMANY = 10;

export default function useSnippetsResults() {
  const { isReady } = useRouter();

  const { term, language, view } = useSearchQueryParams();

  const { data, loading, error, fetchMore } = useQuery<
    GetSemanticPublicRecipesData,
    GetPublicRecipesVariables
  >(GET_SEMANTIC_PUBLIC_RECIPES, {
    skip: !isReady,
    variables: {
      howmany: HOWMANY,
      skip: 0,
      term: term || null,
      onlyPublic: true,
      languages: language ? [language] : language,
    },
  });

  const fetchMoreSnippets = (page: number) => {
    fetchMore({
      variables: {
        skip: page * HOWMANY,
      },
    });
  };

  return {
    view,
    error,
    loading: loading || !isReady,
    language,
    results: data?.assistantRecipesSemanticSearch || null,
    fetchMoreSnippets,
  };
}
