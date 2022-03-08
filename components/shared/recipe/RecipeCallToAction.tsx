import { VStack, Link, Text } from "@chakra-ui/react";
import useShareUrls from "hooks/useShareUrls";

const RecipeCallToAction = () => {
  const { directShareValue } = useShareUrls();

  return (
    <VStack
      mt={4}
      p={4}
      zIndex={1}
      position="relative"
      borderTop="1px solid"
      borderTopColor="whiteAlpha.200"
    >
      <Link
        href={directShareValue}
        target="_blank"
        rel="noreferrer"
        variant="gradient"
      >
        Add Review on Codiga.io
      </Link>
      <Text fontSize="xs">
        Login on Codiga to add a comment on this recipe.
      </Text>
    </VStack>
  );
};

export default RecipeCallToAction;
