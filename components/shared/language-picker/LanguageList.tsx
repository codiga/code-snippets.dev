import { Box, List, ListItem } from "@chakra-ui/react";
import {
  Language,
  UNKNOWN_LANGUAGE,
} from "types/Language";
import LanguageIcon from "../LanguageIcon";

type LanguagesListProps = {
  options: { label: string; value: string }[];
  selected: string;
  onChange: (value: string) => void;
};

const LanguagesList = ({ options, selected, onChange }: LanguagesListProps) => {
  return (
    <List
      d="grid"
      gridTemplateColumns={{
        base: "auto auto",
        md: "auto auto auto",
      }}
      gap={3}
    >
      {options.map(({ label, value }, index) => (
        <ListItem
          key={index}
          onClick={() => onChange(value)}
          d="flex"
          alignItems="center"
          cursor="pointer"
          borderRadius={4}
          p={1}
          bg={value === selected ? "brandBlue.100" : "transparent"}
          _hover={{
            background: "brandBlue.100",
          }}
        >
          <Box as="span" w={8} h={8} d="inline-block" mr={3} flexShrink={0}>
            <LanguageIcon language={(value as Language) || UNKNOWN_LANGUAGE} />
          </Box>
          <Box as="span" flexShrink={0}>
            {label}
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default LanguagesList;
