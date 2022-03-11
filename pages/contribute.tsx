import { ReactElement } from "react";
import { NextPageWithLayout } from "pages/_app";
import PageTitle from "components/shared/PageTitle";
import {
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
        title="Contribute"
        copy="All code snipped listed are curated recipes taken from Codiga API. To contribute and upload recipes follow these steps"
      />
      <Container maxW="container.xl">
        <VStack spacing={8} pos="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            <Card spacing={4}>
              <Image
                alt="Codiga platform"
                width={295}
                height={222}
                src="/contirbute/codiga-platform.svg"
              />
              <Heading as="h2" size="md">
                1. Go to Codiga.io platform
              </Heading>
              <Text fontSize="xl">
                Sign in with your Github, GitLab or Bitbucket account.
              </Text>
            </Card>
            <Card spacing={4}>
              <Image
                alt="Codiga platform"
                width={295}
                height={222}
                src="/contirbute/code-snippet.svg"
              />
              <Heading as="h2" size="md">
                2. Upload your code snippets
              </Heading>
              <Text fontSize="xl">
                Create your own code snippets (Recipes) and start sharing.
              </Text>
            </Card>
          </SimpleGrid>
          <Link href="https://app.codiga.io/" variant="gradient">
            Contribute in Codiga.io
          </Link>
        </VStack>
      </Container>
    </>
  );
};

Contribute.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default Contribute;
