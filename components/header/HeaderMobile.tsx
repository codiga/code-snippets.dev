import { Box, BoxProps, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import useRouteChanged from "hooks/useRouteChange";
import LogoLink from "./LogoLink";
import NavBarMobile from "./NavBarMobile";
import { HeaderProps } from "./Header";
import SearchBox from "components/shared/search-box/SearchBox";

type HeaderMobileProps = HeaderProps &
  BoxProps & {
    onOpen: () => void;
  };

const HeaderMobile = ({
  onOpen,
  search = false,
  ...props
}: HeaderMobileProps) => {
  return (
    <Box {...props}>
      <Box
        d="flex"
        justifyContent="space-between"
        py={4}
        mb={6}
        borderBottom="1px solid"
        borderBottomColor="whiteAlpha.200"
      >
        <LogoLink />
        <IconButton
          aria-label="Open menu"
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
      </Box>
      {search && <SearchBox />}
    </Box>
  );
};

export default HeaderMobile;
