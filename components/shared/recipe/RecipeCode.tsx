import {
  Box,
  BoxProps,
  Button,
  chakra,
  HStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRecipeContext } from "contexts/RecipeProvider";
import { decodeIndent } from "lib/decodeIndent";
import Script from "next/script";
import PerfectScrollbar from "perfect-scrollbar";
import { useEffect, useRef, useState } from "react";
import RecipeShare from "./RecipeShare";

type RecipeCodeProps = BoxProps & {
  removeScroll?: boolean;
};

const RecipeCode = ({ removeScroll = false, ...props }: RecipeCodeProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { presentableFormat, language } = useRecipeContext() || {};
  const bg = useColorModeValue("white", "brand.500");
  const shadow = useColorModeValue("#e9e9e9", "#202124");
  const toast = useToast();

  const decoded = decodeIndent(presentableFormat);

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(decoded);
      toast({
        title: "Snippet copied.",
        description: "Paste the snippet in your IDE.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Something went wrong.",
        description: "Sorry we couldn't copy the snippet.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    // attempt to highlight
    // on mount if prism is alredy loaded
    // once prism is loaded
    // when language change (data is fetched)
    if ((window as any).Prism) {
      (window as any).Prism?.highlightAll();
    }

    if (language && loaded && boxRef.current) {
      new PerfectScrollbar(boxRef.current);
    }
  }, [language, loaded]);

  if (!language) return null;

  return (
    <Box
      w="100%"
      bg={bg}
      overflow={removeScroll ? "hidden" : "auto"}
      d="flex"
      justifyContent="flex-end"
      pos="relative"
      {...props}
    >
      <Box
        ref={boxRef}
        w="100%"
        pos="relative"
        boxShadow={`inset 48px 0px 0px 0px ${shadow}`}
        overflow={removeScroll ? "hidden" : "auto"}
      >
        <HStack
          mt={2}
          mx={4}
          spacing={2}
          justifyContent="flex-end"
          top={2}
          position="sticky"
          zIndex={1}
        >
          <RecipeShare />
          <Button variant="share" size="sm" onClick={copyToClipboard}>
            Copy Snippet
          </Button>
        </HStack>
        <Box
          as="pre"
          w="100%"
          boxShadow={`inset 48px 0px 0px 0px ${shadow}`}
          overflow={removeScroll ? "hidden" : "auto"}
        >
          <code className={`line-numbers lang-${language?.toLowerCase()}`}>
            {decoded}
          </code>
        </Box>
      </Box>
      <Script src="/prism.js" onLoad={handleLoad} />
    </Box>
  );
};

export default RecipeCode;
