import { Box } from "@chakra-ui/react";
import { HeaderProps } from "components/header/Header";
import { PropsWithChildren } from "react";
import BaseLayout from "./BaseLayout";

const StaticLayout = ({ search = false, children }: PropsWithChildren<HeaderProps>) => {
  return (
    <>
      <BaseLayout search={search}>
        <Box
          as="main"
          d="flex"
          overflow="auto"
          flex={{ base: "none", md: "auto" }}
          flexDir={{ base: "column", md: "row" }}
        >
          {children}
        </Box>
      </BaseLayout>
    </>
  );
};

export default StaticLayout;
