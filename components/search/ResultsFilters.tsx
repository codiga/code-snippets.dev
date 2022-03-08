import {
  // ChevronDownIcon,
  DragHandleIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  // Button,
  ButtonGroup,
  HStack,
  IconButton,
  // Input,
  // Popover,
  // PopoverArrow,
  // PopoverBody,
  // PopoverCloseButton,
  // PopoverContent,
  // PopoverHeader,
  // PopoverTrigger,
  Select,
} from "@chakra-ui/react";
// import { debounce } from "lodash";
import { useRouter } from "next/router";
// import { ParsedUrlQuery } from "querystring";
import { ChangeEvent, useCallback, useState } from "react";
import { LanguageEnum } from "types/Language";
// import { RecipeSortingFields } from "types/Recipe";

type View = "list" | "cards";

let options: { label: string; value: string }[] = [];

for (let item in LanguageEnum) {
  options.push({ label: item.toLowerCase().replaceAll("_", " "), value: item });
}

const ResultsFilters = () => {
  const { pathname, query, push } = useRouter();
  const [list, setList] = useState<View>("list");
  const [language, setLanguage] = useState("");
  // const [tag, setTag] = useState("");
  // const [sortBy, setSortBy] = useState(RecipeSortingFields.Name);

  // const handleSort = (value: RecipeSortingFields) => {
  //   setSortBy(value);
  //   push({ query: { ...query, order: value }, pathname });
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const handleTagQuery = useCallback(
  //   debounce((value: string, query: ParsedUrlQuery) => {
  //     if (value) {
  //       push({ query: { ...query, tag: value }, pathname });
  //     } else {
  //       const { tag, ...queryWithoutTag } = query;
  //       push({ query: { ...query }, pathname });
  //     }
  //   }, 300),
  //   []
  // );

  // const handleTag = (event: ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   setTag(value);

  //   if (value) {
  //     handleTagQuery(value, query);
  //   } else {
  //     const { tag, ...queryWithoutTag } = query;
  //     handleTagQuery(value, queryWithoutTag);
  //   }
  // };

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
        {/* <Popover>
          <PopoverTrigger>
            <Button variant="ghost" rightIcon={<ChevronDownIcon />}>
              {sortBy}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Sort by</PopoverHeader>
            <PopoverBody>
              <Box as="ul" listStyleType="none">
                <li onClick={() => handleSort(RecipeSortingFields.Name)}>
                  {RecipeSortingFields.Name}
                </li>
                <li onClick={() => handleSort(RecipeSortingFields.Language)}>
                  {RecipeSortingFields.Language}
                </li>
                <li onClick={() => handleSort(RecipeSortingFields.Rating)}>
                  {RecipeSortingFields.Rating}
                </li>
                <li onClick={() => handleSort(RecipeSortingFields.Uses)}>
                  {RecipeSortingFields.Uses}
                </li>
                <li onClick={() => handleSort(RecipeSortingFields.Timestamp)}>
                  {RecipeSortingFields.Timestamp}
                </li>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover> */}
        {/* <Input
          border="none"
          borderBottom="1px solid"
          borderBottomColor="gray.400"
          borderRadius={0}
          width={32}
          placeholder="Tag"
          value={tag}
          onChange={handleTag}
        /> */}
      </HStack>
      <HStack>
        <ButtonGroup isAttached variant="outline" size="xs">
          <IconButton
            aria-label="List view"
            icon={<HamburgerIcon color={list === "list" ? "#23A9F2" : ""} />}
            onClick={() => handleView("list")}
          />
          <IconButton
            aria-label="Cards view"
            icon={<DragHandleIcon color={list === "cards" ? "#23A9F2" : ""} />}
            onClick={() => handleView("cards")}
          />
        </ButtonGroup>
      </HStack>
    </Box>
  );
};

export default ResultsFilters;
