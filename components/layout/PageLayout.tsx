import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import BaseLayout from "./BaseLayout";

const PageLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <BaseLayout>
        <Box as="main">{children}</Box>
      </BaseLayout>
    </>
  );
};

export default PageLayout;
