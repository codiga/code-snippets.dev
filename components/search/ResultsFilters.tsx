import {
  Box,
  ButtonGroup,
  HStack,
  IconButton,
  Select,
} from "@chakra-ui/react";
import CardsIcon from "components/shared/icons/CardsIcon";
import ListIcon from "components/shared/icons/ListIcon";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { LanguageEnum } from "types/Language";

type View = "list" | "cards";

let options: { label: string; value: string }[] = [];

for (let item in LanguageEnum) {
  options.push({ label: item.toLowerCase().replace(/_/g, " "), value: item });
}

const ResultsFilters = () => {
  const { pathname, query, push } = useRouter();
  const [list, setList] = useState<View>("list");
  const [language, setLanguage] = useState("");

  const handleView = (value: View) => {
    setList(value);
    push({ query: { ...query, view: value }, pathname });
  };

  const handleLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setLanguage(value);

    if (value) {
      push({ query: { ...query, lang: value }, pathname });
    } else {
      const { lang, ...queryWithoutTag } = query;
      push({ query: { ...queryWithoutTag, lang: value }, pathname });
    }
  };

  return (
    <Box d="flex" justifyContent="space-between">
      <HStack mb={4}>
        <Select
          size="sm"
          variant="flushed"
          value={language}
          onChange={handleLanguage}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </HStack>
      <HStack>
        <ButtonGroup isAttached variant="outline" size="xs">
          <IconButton
            aria-label="List view"
            icon={<ListIcon color={list === "list" ? "#23A9F2" : ""} />}
            onClick={() => handleView("list")}
          />
          <IconButton
            aria-label="Cards view"
            icon={<CardsIcon color={list === "cards" ? "#23A9F2" : ""} />}
            onClick={() => handleView("cards")}
          />
        </ButtonGroup>
      </HStack>
    </Box>
  );
};

export default ResultsFilters;
