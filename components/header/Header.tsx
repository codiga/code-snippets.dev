import { Container } from "@chakra-ui/react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export type HeaderProps = {
  search?: boolean;
};

const Header = ({ search = false }: HeaderProps) => {
  return (
    <Container as="header" maxW="container.xl">
      <HeaderDesktop search={search} d={{ base: "none", md: "flex" }} />
      <HeaderMobile search={search} d={{ base: "block", md: "none" }} />
    </Container>
  );
};

export default Header;
