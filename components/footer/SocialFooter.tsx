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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/intent/tweet/?url=https://www.snipt.dev&text=Check%20out%20this%20code%20snippet%20%23cleancode"
          >
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/shareArticle?mini=true&url=https://www.snipt.dev"
          >
            <LinkedInLogo />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.snipt.dev"
          >
            <FacebookLogo />
          </a>
        </li>
      </HStack>
    </HStack>
  );
};

export default SocialFooter;
