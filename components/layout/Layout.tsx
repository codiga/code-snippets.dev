import { Box } from "@chakra-ui/react";
import Footer from "components/footer/Footer";
import Header, { HeaderProps } from "components/header/Header";
import { PropsWithChildren } from "react";
import BaseLayout from "./BaseLayout";

type LayoutProps = HeaderProps & {
  forceFullScreen?: boolean;
};

const Layout = ({
  search = false,
  forceFullScreen = false,
  children,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <BaseLayout>
        <Box
          as="main"
          d="flex"
          flex={{ base: forceFullScreen ? "auto" : "none", md: "auto" }}
          overflow="hidden"
          flexDir="column"
        >
          <Box overflow={{ base: "auto", md: "auto" }}>{children}</Box>
        </Box>
      </BaseLayout>
    </>
  );
};

export default Layout;
