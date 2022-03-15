import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import StarOutlineIcon from "../icons/StarOutlineIcon";

type CommentAuthorProps = {
  avatar: string;
  name: string;
  date: string;
  rating: number;
};

const CommentAuthor = ({ avatar, name, date, rating }: CommentAuthorProps) => {
  return (
    <HStack>
      <Avatar name={name} src={avatar} />
      <VStack alignItems="flex-start" spacing={1}>
        <Text fontSize="sm">{name}</Text>
        <HStack>
          <Text fontSize="xs">{date}</Text>
          <Text>•</Text>
          {rating > 0 && (
            <>
              <StarOutlineIcon />
              <Text fontSize="xs">{rating}</Text>
            </>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CommentAuthor;
