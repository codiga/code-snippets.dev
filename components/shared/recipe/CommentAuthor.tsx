import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

type CommentAuthorProps = {
  name: string;
  date: string;
};

const CommentAuthor = ({ name, date }: CommentAuthorProps) => {
  return (
    <HStack>
      <Avatar />
      <VStack alignItems="flex-start">
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs">{new Date(date).toDateString()}</Text>
      </VStack>
    </HStack>
  );
};

export default CommentAuthor;
