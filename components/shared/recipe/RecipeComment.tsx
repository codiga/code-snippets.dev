import { VStack, Text } from "@chakra-ui/react";
import { PublicUser } from "types/User";
import CommentAuthor from "./CommentAuthor";

type RecipeCommentProps = {
  author: PublicUser | undefined;
  content: string | undefined;
  date: number | undefined;
  rating: number | undefined;
};

const RecipeComment = ({
  author,
  date,
  content,
  rating,
}: RecipeCommentProps) => {
  const avatar = author?.id
    ? `${process.env.NEXT_PUBLIC_CODIGA_API}/user/${author.id}/avatar`
    : "";

  return (
    <VStack w="100%" spacing={4} alignItems="flex-start">
      <CommentAuthor
        avatar={avatar}
        name={author?.displayName || "Anonymous User"}
        date={date ? new Date(date)?.toLocaleString() : ""}
        rating={rating || 0}
      />
      <Text fontSize="sm">{content}</Text>
    </VStack>
  );
};

export default RecipeComment;
