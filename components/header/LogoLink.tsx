import { Box } from "@chakra-ui/react";
import CodeSnippetsLogo from "components/shared/logos/CodeSnippetsLogo";
import NextLink from "next/link";

const LogoLink = () => {
  return (
    <NextLink href="/" passHref>
      <Box as="a" d="flex" alignItems="center">
        <CodeSnippetsLogo />
      </Box>
    </NextLink>
  );
};

export default LogoLink;
