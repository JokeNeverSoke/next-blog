import { useRouter } from "next/router";
import Head from "next/head";
import { Navbar } from "./navbar";
import Footer from "./footer";
import { Box } from "@chakra-ui/react";

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
      </Head>
      {!noNav && <Navbar />}
      <Box as="main" my={8}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
