import { HStack, LinkOverlay, Text } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import { getSnippetUrl } from "lib/snippets";
import { LanguageEnum } from "types/Language";
import LanguageIcon from "../LanguageIcon";

const RecipeTitle = () => {
  const { id, name, language } = useRecipeContext() || {};

  const url = getSnippetUrl({ id, name });

  return (
    <h1>
      <LinkOverlay href={url}>
        <HStack as="span" spacing={2}>
          <LanguageIcon language={language || LanguageEnum.UNKNOWN} />
          <Text fontSize="sm">{name}</Text>
        </HStack>
      </LinkOverlay>
    </h1>
  );
};

export default RecipeTitle;
