import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import PageTitle from "components/shared/PageTitle";
import {
  Box,
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "components/shared/Card";
import Image from "next/image";
import PageLayout from "components/layout/PageLayout";

const Contribute: NextPageWithLayout = () => {
  return (
    <>
      <PageTitle
        title="Code Snippets - Contribute"
        copy="Save your snippets and contribute to the community."
      />
      <Container maxW="container.xl">
        <VStack spacing={{ base: 14, md: 20 }} pos="relative" zIndex={1}>
          <VStack spacing={7} alignItems={{ base: "center", md: "flex-start" }}>
            <Heading size="md" d="flex" alignItems="center">
              <Box mr={2}>
                <Image
                  alt="vscode logo"
                  src="/tools/vscode-logo.svg"
                  width={32}
                  height={32}
                />
              </Box>
              VS Code
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  1. Get the VS Code plugin
                </Heading>
                <Box minH={163} d="flex" alignItems="center">
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={133}
                    quality={100}
                    src="/contirbute/vscode/get-vscode-plugin.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Install the{" "}
                  <Link href="https://marketplace.visualstudio.com/items?itemName=codiga.vscode-plugin">
                    Codiga plugin for VS Code
                  </Link>
                </Text>
              </Card>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  2. Write your code snippet
                </Heading>
                <Box minH={163} d="flex" alignItems="center">
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={163}
                    quality={100}
                    src="/contirbute/vscode/write-your-code-snippet.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Create and save the code snippet of the language of your
                  preference.
                </Text>
              </Card>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  3. Save your code snippet
                </Heading>
                <Box minH={163} d="flex" alignItems="center">
                  <Image
                    alt="Codiga platform"
                    width={380}
                    height={160}
                    quality={100}
                    src="/contirbute/vscode/save-your-code-snippet.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Select your snippet, right click and select Create Codiga
                  Snippet menu option.
                </Text>
              </Card>
            </SimpleGrid>
          </VStack>
          <VStack spacing={7} alignItems={{ base: "center", md: "flex-start" }}>
            <Heading size="md" d="flex" alignItems="center">
              <Box mr={2}>
                <Image
                  alt="vscode logo"
                  src="/tools/jetbrains-logo.svg"
                  width={32}
                  height={32}
                />
              </Box>
              JetBrains
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  1. Get the JetBrains plugin
                </Heading>
                <Box minH={145} d="flex" alignItems="center">
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={120}
                    src="/contirbute/jetbrains/get-jetbrains-plugin.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Install the{" "}
                  <Link href="https://plugins.jetbrains.com/plugin/17969-codiga">
                    Codiga plugin
                  </Link>{" "}
                  available for JetBrains tools.
                </Text>
              </Card>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  2. Write your code snippet
                </Heading>
                <Box minH={145} d="flex" alignItems="center">
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={145}
                    src="/contirbute/jetbrains/write-your-code-snippet.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Create the code snippet of the language of your preference.
                </Text>
              </Card>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  3. Save your code snippet
                </Heading>
                <Box minH={145} d="flex" alignItems="center">
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={150}
                    src="/contirbute/jetbrains/save-your-code-snippet.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Select your snippet, right click and select Create Codiga
                  Snippet
                </Text>
              </Card>
            </SimpleGrid>
          </VStack>
          <VStack spacing={7} alignItems={{ base: "center", md: "flex-start" }}>
            <Heading size="md" d="flex" alignItems="center">
              <Box mr={2}>
                <Image
                  alt="browser icon"
                  src="/logos/browser-logo.svg"
                  width={32}
                  height={32}
                />
              </Box>
              Browser
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  1. Go to Codiga.io platform
                </Heading>
                <Box>
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={228}
                    src="/contirbute/browser/codiga-app-login.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  <Link href="https://app.codiga.io/">Sign in</Link> with your
                  Github, GitLab or Bitbucket account.
                </Text>
              </Card>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  2. Write your code snippet
                </Heading>
                <Box>
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={230}
                    src="/contirbute/browser/write-your-code-snippet.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Create the code snippet of the language of your preference.
                </Text>
              </Card>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  3. Save your code snippet
                </Heading>
                <Box>
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={224}
                    src="/contirbute/browser/save-your-code-snippet.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Click save to upload your code snippet.
                </Text>
              </Card>
            </SimpleGrid>
          </VStack>
          <VStack spacing={7} alignItems={{ base: "center", md: "flex-start" }}>
            <Heading size="md" d="flex" alignItems="center">
              <Box mr={2}>
                <Image
                  alt="chrome logo"
                  src="/logos/chrome-logo.svg"
                  width={32}
                  height={32}
                />
              </Box>
              Chrome
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  1. Get the Chrome plugin
                </Heading>
                <Box>
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={120}
                    src="/contirbute/chrome/get-chrome-extension.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Install the{" "}
                  <Link href="https://chrome.google.com/webstore/detail/codiga/dbkhkhonmelajjempmoadocgneoadjge">
                    Codiga plugin
                  </Link>{" "}
                  available for Chrome
                </Text>
              </Card>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  2. Select your code snippet
                </Heading>
                <Box>
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={114}
                    src="/contirbute/chrome/select-your-code-snippet.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Select the code snippet for the language of your preference.
                </Text>
              </Card>
              <Card spacing={4}>
                <Heading as="h2" size="md">
                  3. Save your code snippet
                </Heading>
                <Box>
                  <Image
                    alt="Codiga platform"
                    width={384}
                    height={124}
                    src="/contirbute/chrome/save-your-code-snippet.png"
                  />
                </Box>
                <Text fontSize="md" textAlign="center">
                  Clic on the Create Snippet button, or right-click and select
                  Create Codiga Snippet.
                </Text>
              </Card>
            </SimpleGrid>
          </VStack>
          <Box pb={{ base: 14, md: 20 }}>
            <Link href="https://app.codiga.io/" variant="gradient">
              Contribute in Codiga.io
            </Link>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

Contribute.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Contribute;
