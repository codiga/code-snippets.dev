import { Box, ButtonGroup, HStack, IconButton, Select } from "@chakra-ui/react";
import CardsIcon from "components/shared/icons/CardsIcon";
import ListIcon from "components/shared/icons/ListIcon";
import LanguagePicker from "components/shared/language-picker/LanguagePicker";
import { useRouter } from "next/router";
import { useState } from "react";

type View = "list" | "cards";

const ResultsFilters = () => {
  const { pathname, query, push } = useRouter();
  const [list, setList] = useState<View>("list");
  const [language, setLanguage] = useState("");

  const handleView = (value: View) => {
    setList(value);
    push({ query: { ...query, view: value }, pathname });
  };

  const handleLanguage = (value: string) => {
    setLanguage(value);

    if (value) {
      push({ query: { ...query, lang: value }, pathname });
    } else {
      const { lang, ...queryWithoutLang } = query;
      push({ query: { ...queryWithoutLang }, pathname });
    }
  };

  return (
    <Box d="flex" justifyContent="space-between" alignItems="center" mb={3}>
      <LanguagePicker value={language} onChange={handleLanguage} />
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
    </Box>
  );
};

export default ResultsFilters;
