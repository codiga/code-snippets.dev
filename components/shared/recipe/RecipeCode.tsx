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
  const boxRef = useRef<HTMLPreElement | null>(null);
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

  if (!language) return <Box w="100%" bg={bg} />;

  return (
    <Box
      bg={bg}
      w="100%"
      minH="190px"
      overflow="hidden"
      pos="relative"
      {...props}
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
      <chakra.pre
        w="100%"
        h="100%"
        pos="absolute"
        top={0}
        ref={boxRef}
        overflow={removeScroll ? "hidden" : "auto"}
      >
        <Box
          as="span"
          pos="absolute"
          top={0}
          left={0}
          bg={shadow}
          w="48px"
          h="100%"
          aria-hidden="true"
        />
        <code className={`line-numbers lang-${language?.toLowerCase()}`}>
          {decoded}
        </code>
      </chakra.pre>
      <Script src="/prism.js" onLoad={handleLoad} />
    </Box>
  );
};

export default RecipeCode;
