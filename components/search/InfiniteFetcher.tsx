import { Box } from "@chakra-ui/react";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";

type InfiniteFetcherProps = {
  callback: (page: number) => void;
};

const InfiniteFetcher = ({ callback }: InfiniteFetcherProps) => {
  const divRef = useRef(null);
  const [page, setPage] = useState(0);
  const entry = useIntersectionObserver(divRef, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    console.log("effect", { isVisible });
    if (isVisible) {
      console.log("callback", { isVisible });
      const next = page + 1;
      setPage(next);
      callback(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return <div ref={divRef}></div>;
};

export default InfiniteFetcher;
