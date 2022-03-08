import { Skeleton } from "@chakra-ui/react";
import Paper from "components/shared/Paper";

const ResultsSkeleton = () => {
  return (
    <Paper h="100%" d="flex" overflow="hidden">
      <Skeleton w="100%" h="100%" />
    </Paper>
  );
};

export default ResultsSkeleton;
