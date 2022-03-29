import {
  Box,
  Button,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Paper from "components/shared/Paper";
import RecipeCode from "components/shared/recipe/RecipeCode";
import RecipeDetails from "components/shared/recipe/RecipeDetails";
import RecipeSummary from "components/shared/recipe/RecipeSummary";
import { RecipeProvider } from "contexts/RecipeProvider";
import { useSearchResultsContext } from "contexts/SearchResulstsProvider";
import { FocusEvent, useEffect, useRef, useState } from "react";
import { Recipe } from "types/Recipe";
import PerfectScrollbar from "perfect-scrollbar";
import InfiniteFetcher from "./InfiniteFetcher";

const ResultsList = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const bg = useColorModeValue("brand.100", "brand.900");
  const sm = useBreakpointValue({ base: true, md: false }, "md");
  const { results, loading, fetchMoreSnippets } = useSearchResultsContext();

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady && listRef.current) {
      new PerfectScrollbar(listRef.current);
      (listRef.current.firstChild as HTMLElement)?.focus();
    }
  }, [isReady]);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  const handleFocus = (event: FocusEvent<HTMLButtonElement, Element>) => {
    event.target.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
  };

  if (sm) {
    return (
      <VStack spacing={6} w="100%">
        {results?.map((item) => (
          <RecipeProvider key={item.id} id={item.id}>
            <Paper w="100%" overflow="hidden">
              <RecipeCode />
              <RecipeDetails />
            </Paper>
          </RecipeProvider>
        ))}
        <InfiniteFetcher callback={fetchMoreSnippets} />
      </VStack>
    );
  }

  return (
    <Paper h="100%" d="flex" overflow="hidden">
      <Tabs
        w="100%"
        d="flex"
        index={tabIndex}
        onChange={handleTabChange}
        orientation="vertical"
      >
        <TabList
          ref={listRef}
          w={296}
          bg={bg}
          flexShrink={0}
          border="none"
          pos="relative"
        >
          {results?.map((item, index) => (
            <Tab
              key={item.id}
              d="block"
              p={0}
              color="inherit !important"
              border="none"
              onFocus={handleFocus}
            >
              <RecipeProvider id={item.id}>
                <RecipeSummary
                  selected={tabIndex === index}
                  direction="column"
                />
              </RecipeProvider>
            </Tab>
          ))}
          <InfiniteFetcher callback={fetchMoreSnippets} />
        </TabList>
        <TabPanels>
          {results?.map((item) => (
            <TabPanel key={item.id} d="flex" p={0} h="100%">
              <RecipeProvider id={item.id}>
                <RecipeCode />
                <RecipeDetails />
              </RecipeProvider>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Paper>
  );
};

export default ResultsList;
