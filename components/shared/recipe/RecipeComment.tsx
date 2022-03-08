import { VStack, Text } from "@chakra-ui/react";
import { User } from "types/User";
import CommentAuthor from "./CommentAuthor";

type RecipeCommentProps = {
  author: User | undefined;
  content: string | undefined;
  date: number | undefined;
};

const RecipeComment = ({ author, date, content }: RecipeCommentProps) => {
  const name = `${author?.info?.firstname || ""} ${
    author?.info?.lastname || ""
  }`.trim();

  return (
    <VStack spacing={4} alignItems="flex-start">
      <CommentAuthor name={name || "Anonymous User"} date={date?.toString() || ""} />
      <Text fontSize="sm">{content}</Text>
    </VStack>
  );
};

export default RecipeComment;
