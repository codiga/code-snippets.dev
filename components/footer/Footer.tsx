import { Box, Container } from "@chakra-ui/react";
import SocialFooter from "./SocialFooter";
import SponsorFooter from "./SponsorFooter";

const Footer = () => {
  return (
    <Container as="footer" maxW="100%">
      <Box
        d="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "center", md: "initial" }}
        gap={{ base: 6, md: 0 }}
        py={6}
        borderTop="1px solid"
        borderTopColor="whiteAlpha.200"
      >
        <SocialFooter />
        <SponsorFooter />
      </Box>
    </Container>
  );
};

export default Footer;
