import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import { useState } from "react";
import RecipeCallToAction from "./RecipeCallToAction";
import RecipeComment from "./RecipeComment";

const RecipeComments = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { comments, commentsCount } = useRecipeContext() || {};

  return (
    <>
      <Heading
        as="h2"
        size="sm"
        my={6}
        mx={4}
        d="flex"
        justifyContent="space-between"
        onClick={() => setIsVisible(!isVisible)}
      >
        <span>{commentsCount} Reviews</span>
        {isVisible ? (
          <ChevronUpIcon d={{ base: "block", md: "none" }} />
        ) : (
          <ChevronDownIcon d={{ base: "block", md: "none" }} />
        )}
      </Heading>
      <Box
        d={{ base: isVisible ? "flex" : "none", md: "flex" }}
        flex="auto"
        flexDir="column"
        overflow="hidden"
      >
        <VStack
          w="100%"
          alignItems="flex-start"
          spacing={8}
          px={4}
          overflow="auto"
        >
          {comments?.map(({ id, author, comment, creationTimestampMs, rating }) => (
            <RecipeComment
              key={id}
              author={author}
              date={creationTimestampMs}
              content={comment}
              rating={rating}
            />
          ))}
        </VStack>
        <RecipeCallToAction />
      </Box>
    </>
  );
};

export default RecipeComments;
