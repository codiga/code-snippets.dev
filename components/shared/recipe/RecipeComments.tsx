import { Box, Heading, VStack } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import RecipeComment from "./RecipeComment";

const RecipeComments = () => {
  const { comments, commentsCount } = useRecipeContext() || {};

  return (
    <VStack
      flex={1}
      spacing={8}
      py={6}
      px={4}
      alignItems="flex-start"
      overflow="auto"
    >
      <Heading as="h2" size="sm">
        {commentsCount} Reviews
      </Heading>
      {comments?.map(({ id, author, comment, creationTimestampMs }) => (
        <RecipeComment
          key={id}
          author={author}
          date={creationTimestampMs}
          content={comment}
        />
      ))}
    </VStack>
  );
};

export default RecipeComments;
