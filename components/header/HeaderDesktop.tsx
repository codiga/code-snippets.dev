import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, BoxProps, IconButton } from "@chakra-ui/react";
import { HeaderProps } from "./Header";
import LogoLink from "./LogoLink";
import NavBar from "./NavBarDesktop";
import ThemeToggle from "./ThemeToggle";

type DesktopHeaderProps = HeaderProps &
  BoxProps & {
    onOpen: () => void;
  };

const DesktopHeader = ({
  onOpen,
  search = false,
  ...props
}: DesktopHeaderProps) => {
  return (
    <Box
      w="100%"
      minH="105px" // same height as header with searchbox
      gap={20}
      py={8}
      borderBottom="1px solid"
      borderBottomColor="whiteAlpha.200"
      {...props}
    >
      <LogoLink />
      <NavBar search={search} />
      <ThemeToggle d={{ base: "none", lg: "flex" }} />
      <IconButton
        aria-label="Open menu"
        variant="ghost"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        d={{ base: "block", lg: "none" }}
      />
    </Box>
  );
};

export default DesktopHeader;
