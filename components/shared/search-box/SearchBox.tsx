import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { useCombobox } from "downshift";
import useSnippetsSummary from "hooks/useSnippetsSummary";
import { RecipeSummary } from "types/Recipe";
import {
  Box,
  IconButton,
  Input,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import SearchBoxOption from "./SerachBoxOption";
import { useRouter } from "next/router";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import NextLink from "next/link";
import debounce from "lodash/debounce";
import { getSnippetUrl } from "lib/snippets";
import { getSingleQueryValue } from "hooks/useSearchQueryParams";
import NoSsr from "../NoSsr";
import useSearchAnimation from "hooks/useSearchAnimation";

/**
 * if you need to update HOWMANY please consider the following:
 * ApolloCache uses the query arguments as keys to store the data
 * if you set it to 10 it will collide with the results list cache
 * https://github.com/codiga/code-snippets.io/blob/main/hooks/useSnippetsResults.ts#L10
 *
 * until we find a better way to handle this be mindful about it!
 *
 * */
const HOWMANY = 6;
const SKIP = 0;

type SearchBoxProps = {
  autoFocus?: boolean;
  withQuery?: boolean;
};

const SearchField = ({
  autoFocus = false,
  withQuery = false,
}: SearchBoxProps) => {
  const { query, push } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputItems, setInputItems] = useState<RecipeSummary[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchSnippetsSummary = useSnippetsSummary();

  const bg = useColorModeValue("white", "#282C34");
  const loader = useColorModeValue("#718096", "white");
  const inputBg = useColorModeValue("white", "#21252B");
  const iconColor = useColorModeValue("gray.500", "white");

  const placeholder = useSearchAnimation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedInputChange = useCallback(
    debounce(async ({ inputValue }) => {
      if (!inputValue) {
        setError(false);
        setInputItems([]);
        return;
      }

      setLoading(true);

      const { data, error: fetchError } = await fetchSnippetsSummary({
        variables: {
          term: inputValue,
          howmany: HOWMANY,
          skip: SKIP,
          languages: null,
          onlyPublic: true,
        },
      });

      setLoading(false);

      if (fetchError) {
        setError(true);
        setInputItems([]);
        return;
      }

      setInputItems(data?.assistantRecipesSemanticSearch || []);
    }, 300),
    []
  );

  const {
    isOpen,
    inputValue,
    highlightedIndex,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    reset,
    openMenu,
  } = useCombobox({
    id: `search-box`,
    items: inputItems,
    initialInputValue: getSingleQueryValue(query.q) || "",
    itemToString: (item) => (item && item.name ? item.name : ""),
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        push(getSnippetUrl(selectedItem));
      }
    },
    onInputValueChange: debouncedInputChange,
  });

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    const q = inputValue ? inputValue : undefined;
    // push(`/search${inputValue ? q : ""}`);
    push({
      pathname: "search",
      query: { ...query, q },
    });
  };

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    const { code } = event;

    if (code === "Enter" && highlightedIndex === -1) {
      handleSearch();
    }
  };

  const handleFocus = () => {
    if (!isOpen) {
      openMenu();
    }
  };

  const handleClear = () => {
    reset();
    inputRef.current?.focus();
  };

  return (
    <Box pos="relative" maxW={{ base: "100%", md: 590 }} mx="auto" flexGrow={2}>
      <Box
        position="relative"
        d="flex"
        alignItems="center"
        {...getComboboxProps()}
      >
        <Input
          bg={inputBg}
          borderRadius={4}
          border="none"
          shadow="base"
          placeholder={placeholder}
          {...getInputProps({
            ref: inputRef,
            onKeyDown: handleEnter,
            onFocus: handleFocus,
          })}
        />
        {loading && (
          <BeatLoader
            color={loader}
            css={css`
              position: absolute;
              right: 40px;
              z-index: 1;
            `}
            size={8}
          />
        )}
        {inputValue && !loading && (
          <IconButton
            position="absolute"
            right={10}
            zIndex={1}
            aria-label="Clear Search"
            variant="ghost"
            size="xs"
            icon={<CloseIcon color={iconColor} />}
            onClick={handleClear}
          />
        )}
        <IconButton
          position="absolute"
          right={0}
          zIndex={1}
          aria-label="Search"
          variant="ghost"
          color="#131126"
          size="md"
          icon={<Search2Icon color={iconColor} />}
          onClick={handleSearch}
        />
      </Box>
      <Box
        as="ul"
        listStyleType="none"
        borderRadius="base"
        pos="absolute"
        zIndex={100}
        mt={2}
        w="100%"
        minW={590}
        bg={bg}
        shadow="lg"
        overflow="hidden"
        {...getMenuProps()}
      >
        {isOpen && inputItems.length > 0 && (
          <>
            {inputItems.map((item, index) => (
              <li
                key={item.id}
                {...getItemProps({
                  item,
                  index,
                })}
              >
                <SearchBoxOption
                  selected={highlightedIndex === index}
                  {...item}
                />
              </li>
            ))}
            <li>
              <NextLink href={`/search?q=${inputValue}`} passHref>
                <Link p={3} w="100%" d="block" textAlign="center">
                  View all
                </Link>
              </NextLink>
            </li>
          </>
        )}
      </Box>
    </Box>
  );
};

const SearchBox = (props: SearchBoxProps) => {
  const { isReady } = useRouter();

  if (!isReady) return null;

  return (
    <NoSsr>
      <SearchField {...props} />
    </NoSsr>
  );
};

export default SearchBox;
