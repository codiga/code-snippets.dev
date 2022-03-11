import { Box } from "@chakra-ui/react";
import { HeaderProps } from "components/header/Header";
import { PropsWithChildren } from "react";
import BaseLayout from "./BaseLayout";

type LayoutProps = HeaderProps & {
  forceFullScreen?: boolean;
};

const HomeLayout = ({
  children,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <BaseLayout>
        <Box as="main" d="flex" flex="auto" overflow="hidden" flexDir="column">
          {children}
        </Box>
      </BaseLayout>
    </>
  );
};

export default HomeLayout;
