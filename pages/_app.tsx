import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { useApollo } from "lib/apolloClient";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { AppProps } from "next/dist/shared/lib/router/router";
import { useEffect, ReactElement, ReactNode } from "react";
import { Provider as RollbarProvider, ErrorBoundary } from "@rollbar/react";
import Script from "next/script";
import theme from "theme";
import Background from "components/shared/Background";
import "styles/prism.css";
import { GA_TRACKING_ID, pageview } from "lib/gtag";
import { rollbarConfig } from "lib/rollbar";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();
  const apolloClient = useApollo(pageProps);

  console.log(theme);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <ApolloProvider client={apolloClient}>
          <ChakraProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)}
            <Background />
          </ChakraProvider>
        </ApolloProvider>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </ErrorBoundary>
    </RollbarProvider>
  );
}
