import { HStack, Text } from "@chakra-ui/react";
import CodigaLogo from "components/shared/logos/CodigaLogo";

const SponsorFooter = () => {
  return (
    <HStack spacing={2}>
      <Text fontSize="xs">Made with ❤️ by</Text>
      <a href="https://app.codiga.io/">
        <CodigaLogo />
      </a>
    </HStack>
  );
};

export default SponsorFooter;
