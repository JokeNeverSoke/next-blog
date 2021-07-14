import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "@fontsource/fira-code";
import theme from "../lib/theme";
import { components } from "../lib/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
