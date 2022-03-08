import { HStack, Text } from "@chakra-ui/react";
import FacebookLogo from "components/shared/logos/FacebookLogo";
import LinkedInLogo from "components/shared/logos/LinkedInLogo";
import TwitterLogo from "components/shared/logos/TwitterLogo";

const SocialFooter = () => {
  return (
    <HStack spacing={6}>
      <Text fontSize="xs">Share</Text>
      <HStack as="ul" spacing={6} listStyleType="none">
        <li>
          <a href="#">
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <LinkedInLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <FacebookLogo />
          </a>
        </li>
      </HStack>
    </HStack>
  );
};

export default SocialFooter;
