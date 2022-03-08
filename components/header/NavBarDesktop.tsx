import { Box, HStack } from "@chakra-ui/react";
import SearchBox from "components/shared/search-box/SearchBox";
import { HeaderProps } from "./Header";
import MenuLinks from "./MenuLinks";

const NavBar = ({ search = false }: HeaderProps) => {
  return (
    <Box
      as="nav"
      d="flex"
      gap={20}
      flexGrow={2}
      justifyContent={search ? "space-between" : "center"}
    >
      {search && <SearchBox withQuery />}
      <HStack as="ul" mx="auto" d="flex" spacing={16} listStyleType="none">
        <MenuLinks />
      </HStack>
    </Box>
  );
};

export default NavBar;
