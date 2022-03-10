import { HStack, StackProps, Text } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import ChartOutlineIcon from "../icons/ChartOutlineIcon";
import StarOutlineIcon from "../icons/StarOutlineIcon";

const RecipeStats = (props: StackProps) => {
  const { uses, averageRating } = useRecipeContext() || {};

  return (
    <HStack spacing={2} {...props}>
      <ChartOutlineIcon />
      <Text fontSize="xs">{uses}</Text>
      {averageRating && (
        <>
          <StarOutlineIcon />
          <Text fontSize="xs">{averageRating}</Text>
        </>
      )}
    </HStack>
  );
};

export default RecipeStats;
