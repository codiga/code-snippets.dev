import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import Layout from "components/layout/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { addApolloState, initializeApollo } from "lib/apolloClient";
import { GET_PUBLIC_RECIPE_BY_ID } from "queries/recipes";
import useRecipeById from "hooks/useRecipeById";
import { Box, Container } from "@chakra-ui/react";
import Paper from "components/shared/Paper";
import RecipeDetails from "components/shared/recipe/RecipeDetails";
import RecipeCode from "components/shared/recipe/RecipeCode";
import { RecipeProvider } from "contexts/RecipeProvider";
import RecipeMetadata from "components/shared/recipe/RecipeMetadata";

type SnippetPath = {
  slug: string;
  id: string;
};

type SnippetProps = {
  id: number;
};

const Snippet: NextPageWithLayout<SnippetProps> = ({ id }) => {
  return (
    <RecipeProvider id={id}>
      <RecipeMetadata />
      <Container maxW="container.xl" my={14}>
        <Paper h="100%" d="flex" overflow="hidden">
          <RecipeDetails />
          <RecipeCode />
        </Paper>
      </Container>
    </RecipeProvider>
  );
};

Snippet.getLayout = function getLayout(page: ReactElement) {
  return <Layout fullScreen>{page}</Layout>;
};

export default Snippet;

export const getStaticProps: GetStaticProps<
  SnippetProps,
  SnippetPath
> = async ({ params }) => {
  const { id: idParam } = params as SnippetPath;
  const id = Number(idParam);

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PUBLIC_RECIPE_BY_ID,
    variables: {
      id,
      howmanycomments: 100,
      skipcomments: 0,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      id,
    },
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
