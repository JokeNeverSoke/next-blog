import { Box, Flex, UnorderedList } from "@chakra-ui/react";
import { SiteLink } from "./siteLink";

const NavbarItem: React.FC<{ to: string }> = ({ children, to }) => {
  return (
    <SiteLink px={[1, 4]} py={2} to={to} _activeLink={{ fontWeight: "bold" }}>
      {children}
    </SiteLink>
  );
};

export const Navbar = () => {
  return (
    <Box as="nav">
      <UnorderedList
        display="flex"
        listStyleType="none"
        justifyContent="center"
        m={0}
      >
        <NavbarItem to="/">Home</NavbarItem>
        <NavbarItem to="/tags">Tags</NavbarItem>
        <NavbarItem to="/projects">Projects</NavbarItem>
        <NavbarItem to="/friends">Friends</NavbarItem>
        <NavbarItem to="/about">About</NavbarItem>
      </UnorderedList>
    </Box>
  );
};
