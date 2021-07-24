import { Box, Center, Flex, Text, Container } from "@chakra-ui/react";
import React from "react";
import { SiteLink } from "./siteLink";

const Footer = () => {
  return (
    <Box w="full" as="footer">
      <Box
        w={["85%", null, "75%"]}
        mx="auto"
        borderColor="gray.700"
        borderTop="2px solid"
      />
      <Center p={[4, 8]}>
        <Container maxW="container.lg">
          <Text fontStyle="italic">
            Site built on <SiteLink to="https://nextjs.org/">Next.JS</SiteLink>{" "}
            + <SiteLink to="https://chakra-ui.com/">Chakra UI</SiteLink>. Hosted
            on <SiteLink to="https://vercel.com">Vercel</SiteLink>, with code on{" "}
            <SiteLink to="https://github.com/jokeneversoke/next-blog">
              GitHub
            </SiteLink>
            . Content is public under{" "}
            <SiteLink to="https://creativecommons.org/licenses/by/4.0/">
              CC BY 4.0
            </SiteLink>
            , which means that you have the freedom to share and remix as long
            as you do so with links back. Links at least. Program codes are
            under{" "}
            <SiteLink to="https://snyk.io/learn/what-is-mit-license/">
              MIT
            </SiteLink>
            .
          </Text>
        </Container>
      </Center>
    </Box>
  );
};

export default Footer;
