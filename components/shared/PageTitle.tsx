import { Container, Heading, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type PageTitleProps = {
  title: string;
  copy?: string;
};

const PageTitle = ({
  title,
  copy,
  children,
}: PropsWithChildren<PageTitleProps>) => {
  return (
    <Container
      maxW="container.md"
      mt={{ base: 16, md: 20 }}
      mb={{ base: 6, md: 20 }}
    >
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        {title}
      </Heading>
      {copy && (
        <Text fontSize="md" textAlign="center">
          {copy}
        </Text>
      )}
      {children}
    </Container>
  );
};

export default PageTitle;
