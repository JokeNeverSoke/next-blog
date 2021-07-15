import { useEffect } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import "@fontsource/fira-code";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/github-dark.css";
import theme from "../lib/theme";
import { components } from "../lib/components";
import "../lib/highlight";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
