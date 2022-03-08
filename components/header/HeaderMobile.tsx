import { Box, BoxProps, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import useRouteChanged from "hooks/useRouteChange";
import LogoLink from "./LogoLink";
import NavBarMobile from "./NavBarMobile";
import { HeaderProps } from "./Header";
import SearchBox from "components/shared/search-box/SearchBox";

const HeaderMobile = ({ search = false, ...props }: HeaderProps & BoxProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useRouteChanged(onClose);

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
      <NavBarMobile isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default HeaderMobile;
