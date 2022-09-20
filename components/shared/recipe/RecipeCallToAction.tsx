import {
  VStack,
  Link,
  Text,
  useColorModeValue,
  StackProps,
} from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import { getRecipeCommentUrl } from "lib/snippets";

type RecipeCallToActionProps = StackProps;

const RecipeCallToAction = (props: RecipeCallToActionProps) => {
  const { id, keywords } = useRecipeContext() || {};
  const codigaRecipeUrl = getRecipeCommentUrl({ id, keywords });
  const bg = useColorModeValue("brand.100", "brand.900");

  return (
    <VStack
      p={4}
      bg={bg}
      zIndex={1}
      position="relative"
      borderTop="1px solid"
      borderTopColor="whiteAlpha.200"
      {...props}
    >
      <Link
        href={codigaRecipeUrl}
        target="_blank"
        rel="noreferrer"
        variant="gradient"
      >
        Add Comment on Codiga.io
      </Link>
      <Text fontSize="xs" textAlign="center">
        Login on Codiga to add a comment on this snippet.
      </Text>
    </VStack>
  );
};

export default RecipeCallToAction;
