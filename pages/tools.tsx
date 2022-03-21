import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import Layout from "components/layout/Layout";
import PageTitle from "components/shared/PageTitle";
import {
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Card from "components/shared/Card";
import Image from "next/image";
import PageLayout from "components/layout/PageLayout";

const Tools: NextPageWithLayout = () => {
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  return (
    <>
      <PageTitle
        title="Tools"
        copy="This is a list of available tools to handle your code snippets"
      />
      <Container maxW="container.xl">
        <VStack
          alignItems="flex-start"
          spacing={6}
          borderBottom="1px solid"
          borderBottomColor={borderColor}
          pb={{ base: 8, md: 16 }}
          mb={{ base: 8, md: 16 }}
        >
          <Heading size="md">Code Snippets manager</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="codiga logo"
                  width="32px"
                  height="32px"
                  src="/tools/codiga-logo.svg"
                />{" "}
                Codiga
              </Heading>
              <Text fontSize="md">
                Code snippets manager to create and share snippets from your
                IDE.
              </Text>
              <Link href="https://app.codiga.io" variant="gradient">
                Visit Codiga.io
              </Link>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>

      <Container maxW="container.xl">
        <VStack
          alignItems="flex-start"
          spacing={6}
          pb={{ base: 8, md: 16 }}
          mb={{ base: 8, md: 16 }}
        >
          <Heading size="md">Code snippets sharing</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="vscode logo"
                  width="32px"
                  height="32px"
                  src="/tools/vscode-logo.svg"
                />{" "}
                VS Code
              </Heading>
              <Text fontSize="md">
                Code editing. Redefined. Free. Built on open source. Runs
                everywhere.
              </Text>
              <Link
                href="https://code.visualstudio.com/docs/editor/userdefinedsnippets"
                variant="gradient"
              >
                Learn about snippets in VS Code
              </Link>
            </Card>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="jetbrains logo"
                  width="32px"
                  height="32px"
                  src="/tools/jetbrains-logo.svg"
                />{" "}
                JetBrains Live Templates
              </Heading>
              <Text fontSize="md">
                Use JetBrains Live Templates to insert common constructs into
                your code.
              </Text>
              <Link
                href="https://www.jetbrains.com/help/idea/using-live-templates.html"
                variant="gradient"
              >
                View Live Template Documentation
              </Link>
            </Card>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="github logo"
                  width="32px"
                  height="32px"
                  src="/tools/github-logo.svg"
                />{" "}
                GitHub Gist
              </Heading>
              <Text fontSize="md">
                Gist is a simple way to share snippets and pastes with others.
              </Text>
              <Link href="https://gist.github.com/" variant="gradient">
                View Gist Documentation
              </Link>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>
      <Container maxW="container.xl">
        <VStack
          alignItems="flex-start"
          spacing={6}
          borderBottom="1px solid"
          borderBottomColor={borderColor}
          pb={{ base: 8, md: 16 }}
          mb={{ base: 8, md: 16 }}
        >
          <Heading size="md">Code snippets to image</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="snapiffy logo"
                  width="32px"
                  height="32px"
                  src="/tools/snapiffy-logo.svg"
                />{" "}
                Snapiffy
              </Heading>
              <Text fontSize="md">
                Easily explain your code and share your knowledge with the rest
                of the world.
              </Text>
              <Link href="https://snappify.io/" variant="gradient">
                Go to Sanpiffy
              </Link>
            </Card>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="carbon logo"
                  width="32px"
                  height="32px"
                  src="/tools/carbon-logo.svg"
                />{" "}
                Carbon
              </Heading>
              <Text fontSize="md">
                Create and share beautiful images of your source code.
              </Text>
              <Link href="https://carbon.now.sh/" variant="gradient">
                Go to Carbon
              </Link>
            </Card>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="ray logo"
                  width="32px"
                  height="32px"
                  src="/tools/ray-logo.svg"
                />{" "}
                Ray
              </Heading>
              <Text fontSize="md">
                With Ray.so, create beautiful images of your code.
              </Text>
              <Link href="https://ray.so/" variant="gradient">
                Go to Ray
              </Link>
            </Card>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="codekeep logo"
                  width="32px"
                  height="32px"
                  src="/tools/codekeep-logo.svg"
                />{" "}
                CodeKeep Screenshot
              </Heading>
              <Text fontSize="md">
                Codekeep.io lets you store and share bits of code and text with
                other users.
              </Text>
              <Link href="https://codekeep.io/screenshot" variant="gradient">
                Go to CodeKeep
              </Link>
            </Card>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                <Image
                  alt="codeimg logo"
                  width="32px"
                  height="32px"
                  src="/tools/codeimg-logo.svg"
                />{" "}
                Codeimg
              </Heading>
              <Text fontSize="md">
                Create and share beautiful images of your source code.
              </Text>
              <Link href="https://codeimg.io/" variant="gradient">
                Go to Codeimg
              </Link>
            </Card>
            <Card spacing={4} alignItems="flex-start">
              <Heading as="h3" size="sm" d="flex" alignItems="center" gap={1}>
                Instacode
              </Heading>
              <Text fontSize="md">
                Create stylish screenshots of their code snippets and share
                them.
              </Text>
              <Link
                href="https://github.com/Eugeny/instacode"
                variant="gradient"
              >
                Visit Instacode
              </Link>
            </Card>
          </SimpleGrid>
        </VStack>
      </Container>
      <Container maxW="container.xl" mb={{ base: 6, md: 14 }}>
        <VStack spacing={8}>
          <Heading size="lg">Not seeing your tool?</Heading>
          <Text>
            Send us an email at{" "}
            <Link href="mailto:hello@snipt.dev">hello@snipt.dev</Link> to add
            your tool to the list!
          </Text>
        </VStack>
      </Container>
    </>
  );
};

Tools.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Tools;
