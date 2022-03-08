import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import Layout from "components/layout/Layout";
import PageTitle from "components/shared/PageTitle";
import {
  Box,
  Container,
  Heading,
  Kbd,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const Snippets: NextPageWithLayout = () => {
  return (
    <>
      <PageTitle
        title="What are Code Snippets?"
        copy="Code snippets are code blocks you can share and reuse yourself. By defining reusable code blocks you can import in your IDE, you not only improve your productivity but you also make sure you always import the correct code and are not missing anything (e.g. missing argument, not checking error code or exceptions)."
      />
      <Container
        maxW="container.xl"
        d={{ base: "none", md: "flex" }}
        justifyContent="center"
      >
        <Image
          width={811}
          height={397}
          alt="what are code snippets"
          src="/snippets/what-are-code-snippets-desktop.svg"
        />
      </Container>
      <Container maxW="container.xl" d={{ base: "block", md: "none" }}>
        <Image
          width={340}
          height={642}
          alt="what are code snippets"
          src="/snippets/what-are-code-snippets-mobile.svg"
        />
      </Container>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={40}>
          <VStack spacing={4}>
            <Heading size="md">Why Code Snippets are important?</Heading>
            <Box>
              <Image
                width={360}
                height={192}
                alt="why code snippets are important"
                src="/snippets/why-snippets-are-important.svg"
              />
            </Box>
            <Text fontSize="md" align="left">
              When using code snippets for yourself, you make sure you define
              code once and reuse it correctly in other codebases. It guarantees
              you are not missing an argument or an error case.
            </Text>
            <Text fontSize="md" align="left">
              When sharing code snippets in a team, it ensures that the team is
              using the same code consistently. By having a library of code
              snippets shared with your team, you ensure that your team is
              always using safe, vetted code patterns in all your code base.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Heading size="md">How to share a snippet?</Heading>
            <Box>
              <Image
                width={360}
                height={192}
                alt="how to share a snippet"
                src="/snippets/how-to-share-a-snippet.svg"
              />
            </Box>
            <Text fontSize="md" align="left">
              It depends on your developer environment each development
              environment has its specificity. VS Code and JetBrains allow you
              to define code snippets you can reuse on your local computer but
              not share with your team. GitHub allows you to define gist but
              there is no way to share them with your team across IDE.
            </Text>
            <Text fontSize="md" align="left">
              You can share a code snippet on Codiga in a single click in VS
              Code, JetBrains product or Google chrome. You can read more about
              the Codiga snippet manager in the tool section.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Heading size="md">How to use a snippet in your IDE?</Heading>
            <Box>
              <Image
                width={360}
                height={192}
                alt="how to use a snippet in your IDE"
                src="/snippets/how-to-use-snippets-in-ide.svg"
              />
            </Box>
            <Text fontSize="md" align="left">
              As for sharing, it all depend on the editor.{" "}
              <Link href="https://code.visualstudio.com/docs/editor/userdefinedsnippets">
                VS Code
              </Link>{" "}
              lets you type an abbreviation to reuse a code snippet and
              <Link href="https://www.jetbrains.com/help/idea/using-live-templates.html">
                JetBrains live template
              </Link>{" "}
              lets you reuse code blocks in their IDE. Codiga snippets manager
              lets you search and import code snippets using their Coding
              Assistant function that is triggered using <Kbd>⌘</Kbd> +{" "}
              <Kbd>SHIFT</Kbd> + <Kbd>C</Kbd> on VS Code or <Kbd>⌘</Kbd> +{" "}
              <Kbd>ALT</Kbd> + <Kbd>C</Kbd> in JetBrains. You can learn more
              about the Codiga snippet manager in the tool section.
            </Text>
          </VStack>
          <VStack spacing={4}>
            <Heading size="md">
              What are the best tools to use and manage code snippets?
            </Heading>
            <Box d={{ base: "none", md: "block" }}>
              <Image
                width={492}
                height={132}
                alt="code snippets tools"
                src="/snippets/code-snippets-tools.svg"
              />
            </Box>
            <Box d={{ base: "block", md: "none" }}>
              <Image
                width={311}
                height={240}
                alt="code snippets tools"
                src="/snippets/code-snippets-tools-mobile.svg"
              />
            </Box>
            <Text fontSize="md" align="left">
              There are plenty of tools available to share code snippets! Check
              out our tools section to see all available tools!
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  );
};

Snippets.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Snippets;
