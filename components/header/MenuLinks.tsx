import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

type MenuLinksProps = {
  big?: boolean;
};

const MenuLinks = ({ big = false }: MenuLinksProps) => {
  const { pathname } = useRouter();
  const fontSize = big ? "24px" : "12px";

  return (
    <>
      <li>
        <NextLink href="/snippets-101" passHref>
          <Link fontSize={fontSize} variant={pathname === "/snippets-101" ? "navSelected" : "nav"}>
            Snippets 101
          </Link>
        </NextLink>
      </li>
      <li>
        <NextLink href="/tools" passHref>
          <Link fontSize={fontSize} variant={pathname === "/tools" ? "navSelected" : "nav"}>
            Tools
          </Link>
        </NextLink>
      </li>
      <li>
        <NextLink href="/contribute" passHref>
          <Link fontSize={fontSize} variant={pathname === "/contribute" ? "navSelected" : "nav"}>
            Contribute
          </Link>
        </NextLink>
      </li>
    </>
  );
};

export default MenuLinks;
