import { CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import useShareUrls from "hooks/useShareUrls";

type RecipeShareProps = {
  id: number;
  code: string;
};

const RecipeShare = () => {
  const toast = useToast();
  const { directShareValue, HTLMShareValue, markdownShareValue, shareText } =
    useShareUrls();

  const copyToClipboard = (value: string) => {
    try {
      navigator.clipboard.writeText(value);
      toast({
        title: "Copied.",
        description: "Paste the link anywhere you want.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Something went wrong.",
        description: "Sorry try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="share" size="sm">
          Share Code Snippet
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Share this code snippet!</PopoverHeader>
        <PopoverBody w="100%">
          <Tabs>
            <TabList>
              <Tab>Social</Tab>
              <Tab>Direct</Tab>
              <Tab>Markdown</Tab>
              <Tab>HTML</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <HStack>
                  <Link
                    href={`https://twitter.com/intent/tweet/?url=${directShareValue}&text=${shareText}`}
                    target="_blank"
                    rel="noreferrer"
                    variant="gradient"
                  >
                    Twitter
                  </Link>
                  <Link
                    href={`https://www.facebook.com/sharer/sharer.php?u=${directShareValue}`}
                    target="_blank"
                    rel="noreferrer"
                    variant="gradient"
                  >
                    Facebook
                  </Link>
                  <Link
                    href={`http://www.linkedin.com/shareArticle?mini=true&url=${directShareValue}`}
                    target="_blank"
                    rel="noreferrer"
                    variant="gradient"
                  >
                    LinkedIn
                  </Link>
                </HStack>
              </TabPanel>
              <TabPanel>
                <InputGroup size="md">
                  <Input pr="4.5rem" value={directShareValue} readOnly />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => copyToClipboard(directShareValue)}
                    >
                      <CopyIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </TabPanel>
              <TabPanel>
                <InputGroup size="md">
                  <Input pr="4.5rem" value={markdownShareValue} readOnly />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => copyToClipboard(markdownShareValue)}
                    >
                      <CopyIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </TabPanel>
              <TabPanel>
                <InputGroup size="md">
                  <Input pr="4.5rem" value={HTLMShareValue} readOnly />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => copyToClipboard(HTLMShareValue)}
                    >
                      <CopyIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default RecipeShare;
