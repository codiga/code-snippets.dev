import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

type CommentAuthorProps = {
  avatar: string;
  name: string;
  date: string;
};

const CommentAuthor = ({ avatar, name, date }: CommentAuthorProps) => {
  return (
    <HStack>
      <Avatar name={name} src={avatar} />
      <VStack alignItems="flex-start" spacing={1}>
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs">{date}</Text>
      </VStack>
    </HStack>
  );
};

export default CommentAuthor;
