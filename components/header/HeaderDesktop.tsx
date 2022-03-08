import { Box, BoxProps } from "@chakra-ui/react";
import { HeaderProps } from "./Header";
import LogoLink from "./LogoLink";
import NavBar from "./NavBarDesktop";
import ThemeToggle from "./ThemeToggle";

const DesktopHeader = ({
  search = false,
  ...props
}: HeaderProps & BoxProps) => {
  return (
    <Box
      w="100%"
      gap={20}
      py={8}
      borderBottom="1px solid"
      borderBottomColor="whiteAlpha.200"
      {...props}
    >
      <LogoLink />
      <NavBar search={search} />
      <ThemeToggle />
    </Box>
  );
};

export default DesktopHeader;
