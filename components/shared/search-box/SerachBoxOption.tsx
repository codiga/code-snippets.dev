import { Box, HStack, Tag, Text, useColorModeValue } from "@chakra-ui/react";
import { UNKNOWN_LANGUAGE } from "types/Language";
import { RecipeSummary } from "types/Recipe";
import ChartOutlineIcon from "../icons/ChartOutlineIcon";
import StarOutlineIcon from "../icons/StarOutlineIcon";
import LanguageIcon from "../LanguageIcon";

type SearchBoxOptionProps = RecipeSummary & {
  selected: boolean;
};

const SearchBoxOption = ({
  language,
  name,
  uses,
  averageRating,
  tags,
  selected,
}: SearchBoxOptionProps) => {
  const borderColor = useColorModeValue("blackAlpha.200", "#06041A");

  return (
    <Box
      as="a"
      d="flex"
      cursor="pointer"
      justifyContent="space-between"
      p={3}
      borderBottom="1px solid"
      borderColor={borderColor}
      bg={selected ? "brandBlue.100" : "transparent"}
    >
      <HStack as="h1" spacing={2}>
        <LanguageIcon language={language || UNKNOWN_LANGUAGE} />
        <Text fontSize="sm">{name}</Text>
      </HStack>
      <HStack spacing={2}>
        <ChartOutlineIcon />
        <Text fontSize="xs">{uses}</Text>
        {averageRating && (
          <>
            <StarOutlineIcon />
            <Text fontSize="xs">{averageRating}</Text>
          </>
        )}
        <HStack>
          {tags?.slice(0, 2).map((tag, index) => (
            <Tag key={index} variant="snippet">
              {tag}
            </Tag>
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};

export default SearchBoxOption;
