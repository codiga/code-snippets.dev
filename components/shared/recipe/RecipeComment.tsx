import { VStack, Text } from "@chakra-ui/react";
import { User } from "types/User";
import CommentAuthor from "./CommentAuthor";

type RecipeCommentProps = {
  author: User | undefined;
  content: string | undefined;
  date: number | undefined;
  rating: number | undefined;
};

const RecipeComment = ({ author, date, content, rating }: RecipeCommentProps) => {
  const name = `${author?.info?.firstname || ""} ${
    author?.info?.lastname || ""
  }`.trim();

  const avatar = author?.id
    ? `${process.env.NEXT_PUBLIC_CODIGA_API}/user/${author.id}/avatar`
    : "";

  return (
    <VStack w="100%" spacing={4} alignItems="flex-start">
      <CommentAuthor
        avatar={avatar}
        name={author?.username || name || "Anonymous User"}
        date={date ? new Date(date)?.toLocaleString() : ""}
        rating={rating || 0}
      />
      <Text fontSize="sm">{content}</Text>
    </VStack>
  );
};

export default RecipeComment;
