import { Container, useDisclosure } from "@chakra-ui/react";
import useRouteChanged from "hooks/useRouteChange";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import NavBarMobile from "./NavBarMobile";

export type HeaderProps = {
  search?: boolean;
};

const Header = ({ search = false }: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useRouteChanged(onClose);

  return (
    <Container as="header" maxW="100%">
      <HeaderDesktop
        search={search}
        onOpen={onOpen}
        d={{ base: "none", md: "flex" }}
      />
      <HeaderMobile
        search={search}
        onOpen={onOpen}
        d={{ base: "block", md: "none" }}
      />
      <NavBarMobile isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Header;
