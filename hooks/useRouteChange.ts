import { useRouter } from "next/router";
import { useEffect } from "react";

const useRouteChanged = (fn: (url?: string) => void) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      fn(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, fn]);
};

export default useRouteChanged;
