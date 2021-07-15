/* eslint-disable react/display-name */
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  Box,
  Code,
  Divider,
  Heading,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import { SiteLink } from "../components/siteLink";
import { PostLayout } from "../components/postLayout";

const PostHeading: React.FC = (props) => <Heading {...props} mt={8} mb={3} />;

export const components: React.ComponentProps<
  typeof MDXProvider
>["components"] = {
  wrapper: (props) => {
    const { title, tags } = props.meta;
    if (props.isPreview) {
      return (
        <Box
          as={props.as || "article"}
          {...{ ...props, meta: undefined, isPreview: undefined }}
        />
      );
    }
    return (
      <PostLayout title={title} tags={tags}>
        <Box as={props.as || "article"} {...{ ...props, meta: undefined }} />
      </PostLayout>
    );
  },
  h1: (props) => <PostHeading as="h1" {...props} />,
  h2: (props) => <PostHeading as="h2" fontSize="2xl" {...props} />,
  h3: (props) => <PostHeading as="h3" fontSize="2xl" {...props} />,
  h4: (props) => <PostHeading as="h4" fontSize="xl" {...props} />,
  h5: (props) => <PostHeading as="h5" fontSize="lg" {...props} />,
  h6: (props) => <PostHeading as="h6" fontSize="md" {...props} />,
  del: (
    props: any // hi
  ) => (
    <Text
      as="del"
      background="black"
      color="black"
      textDecor="none"
      transition="0.2s ease-in-out"
      _hover={{ background: "none" }}
      {...props}
    />
  ),
  inlineCode: (props) => (
    <Code {...props} mx={1} borderRadius="md" fontFamily="mono" />
  ),
  NextImage: (props: any) => {
    return <Image alt={props.alt || "Image"} {...props} />;
  },
  a: (props) => <SiteLink {...{ ...props, href: undefined, to: props.href }} />,
  code: (props) => (
    <Box
      as="pre"
      fontSize="sm"
      fontFamily="mono"
      background="gray.600"
      py={2}
      pl={2}
      my={1}
      borderRadius="xl"
      borderColor="gray.300"
      borderStyle="solid"
      borderWidth={1}
      overflowX="scroll"
      _dark={{
        background: "gray.700",
      }}
    >
      <Code {...props} background="none" color="gray.200" />
    </Box>
  ),
  p: (props) => <Text {...props} my={2} />,
  ul: (props) => <UnorderedList pl={2} {...props} />,
  ol: (props) => <OrderedList pl={2} {...props} />,
  hr: (props) => <Divider {...props} my={4} borderBottomWidth="3px" />,
};
