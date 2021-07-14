import React from "react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const SiteLink: React.FC<
  { to: string } & React.ComponentProps<typeof Link>
> = (props) => {
  return (
    <NextLink href={props.to} passHref>
      <Link {...{ ...props, to: undefined }} />
    </NextLink>
  );
};
