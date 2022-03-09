import { Box } from "@chakra-ui/react";
import Footer from "components/footer/Footer";
import Header, { HeaderProps } from "components/header/Header";
import { PropsWithChildren } from "react";

type LayoutProps = HeaderProps & {
  fullScreen?: boolean;
};

const Layout = ({
  search = false,
  fullScreen = false,
  children,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Header search={search} />
      <Box as="main" flexDir={fullScreen ? "row" : "column"}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
