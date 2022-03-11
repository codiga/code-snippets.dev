import { Box, List, ListItem } from "@chakra-ui/react";
import { Language, LANGUAGES, LANGUAGES_MAP } from "types/Language";
import LanguageIcon from "../LanguageIcon";

type LanguagesListProps = {
  selected: Language | null;
  onChange: (value: Language | null) => void;
};

const OPTIONS = LANGUAGES.filter(
  (lang) => !["Visual", "React", "Pascal"].includes(lang)
);

const LanguagesList = ({ selected, onChange }: LanguagesListProps) => {
  return (
    <List
      d="grid"
      gridTemplateColumns={{
        base: "auto auto",
        md: "auto auto auto",
      }}
      gap={3}
    >
      {OPTIONS.map((value, index) => (
        <ListItem
          key={index}
          onClick={() => onChange(value)}
          d="flex"
          alignItems="center"
          cursor="pointer"
          p={1}
          borderRadius={4}
          bg={value === selected ? "brandBlue.100" : "transparent"}
          _hover={{
            background: "brandBlue.100",
          }}
        >
          <Box as="span" w={8} h={8} d="inline-block" mr={3} flexShrink={0}>
            <LanguageIcon language={value} />
          </Box>
          <Box as="span" flexShrink={0}>
            {LANGUAGES_MAP[value].label}
          </Box>
        </ListItem>
      ))}
      <ListItem
        onClick={() => onChange(null)}
        d="flex"
        gridColumn="1 / span 3"
        alignItems="center"
        cursor="pointer"
        borderRadius={4}
        p={1}
        bg={selected ? "transparent" : "brandBlue.100"}
        _hover={{
          background: "brandBlue.100",
        }}
      >
        <Box as="span" w="100%" textAlign="center">
          All languages
        </Box>
      </ListItem>
    </List>
  );
};

export default LanguagesList;
