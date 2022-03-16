import { VStack, Link, Text } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import { getRecipeCommentUrl } from "lib/snippets";

const RecipeCallToAction = () => {
  const { id, keywords } = useRecipeContext() || {};
  const codigaRecipeUrl = getRecipeCommentUrl({ id, keywords });

  return (
    <VStack
      p={4}
      zIndex={1}
      position="relative"
      borderTop="1px solid"
      borderTopColor="whiteAlpha.200"
    >
      <Link
        href={codigaRecipeUrl}
        target="_blank"
        rel="noreferrer"
        variant="gradient"
      >
        Add Review on Codiga.io
      </Link>
      <Text fontSize="xs" textAlign="center">
        Login on Codiga to add a comment on this recipe.
      </Text>
    </VStack>
  );
};

export default RecipeCallToAction;
