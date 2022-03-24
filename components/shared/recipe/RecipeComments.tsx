import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import PerfectScrollbar from "perfect-scrollbar";
import { useEffect, useRef, useState } from "react";
import RecipeCallToAction from "./RecipeCallToAction";
import RecipeComment from "./RecipeComment";

const RecipeComments = () => {
  const commentsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { comments, commentsCount } = useRecipeContext() || {};

  useEffect(() => {
    if (commentsRef.current) {
      new PerfectScrollbar(commentsRef.current);
    }
  }, []);

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
        flexDir="column"
      >
        <VStack
          w="100%"
          alignItems="flex-start"
          spacing={8}
          px={4}
          pos="relative"
          ref={commentsRef}
        >
          {comments?.map(
            ({ id, author, comment, creationTimestampMs, rating }) => (
              <RecipeComment
                key={id}
                author={author}
                date={creationTimestampMs}
                content={comment}
                rating={rating}
              />
            )
          )}
        </VStack>
      </Box>
    </>
  );
};

export default RecipeComments;
