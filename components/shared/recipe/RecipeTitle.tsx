import NextLink from "next/link";
import { HStack, Text } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import { getSnippetUrl } from "lib/snippets";
import LanguageIcon from "../LanguageIcon";

type RecipeTitleProps = {
  link?: boolean;
};

const RecipeTitle = ({ link = false }: RecipeTitleProps) => {
  const { id, name, language } = useRecipeContext() || {};

  if (!id) return null;
  if (!language) return null;

  if (link) {
    const url = getSnippetUrl({ id, name, language });

    return (
      <h1>
        <NextLink href={url} passHref>
          <HStack as="a" spacing={2}>
            <LanguageIcon language={language} />
            <Text fontSize="sm">{name}</Text>
          </HStack>
        </NextLink>
      </h1>
    );
  }

  return (
    <HStack as="h1" spacing={2}>
      <LanguageIcon language={language} />
      <Text fontSize="sm">{name}</Text>
    </HStack>
  );
};

export default RecipeTitle;
