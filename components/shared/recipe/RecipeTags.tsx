import { HStack, StackProps, Tag } from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";

const RecipeTags = (props: StackProps) => {
  const { tags } = useRecipeContext() || {};

  return (
    <HStack {...props}>
      {tags?.slice(0, 2).map((tag, index) => (
        <Tag key={index} variant="snippet">
          {tag}
        </Tag>
      ))}
    </HStack>
  );
};

export default RecipeTags;
