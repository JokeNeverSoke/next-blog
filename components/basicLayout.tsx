import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar } from "./navbar";
import Footer from "./footer";
import { Box, Flex } from "@chakra-ui/react";

export interface BasicLayoutProps {
  title?: string;
  description?: string;
  noNav?: boolean;
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  title,
  description,
  noNav,
}) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title ? `${title} | ` : ""}JokeNS</title>
        <meta
          property="og:url"
          content={`https://jokens.me${router.pathname}`}
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="Atom Feed"
          href="/atom.xml"
        />
      </Head>
      <Flex direction="column" minH="100vh">
        {!noNav && <Navbar />}
        <Box as="main" flexGrow={1}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};
