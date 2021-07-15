import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import { BasicLayout } from "../../components/basicLayout";
import { posts } from "../../lib/getAllPosts";
import { GetStaticPaths, GetStaticProps } from "next";
import { SiteLink } from "../../components/siteLink";
import { getAllTags, tagCounts } from "../../lib/getAllTags";
import { tags } from "../../lib/tags";

const TagPage = ({ tag }: { tag: string }) => {
  const { name, description } = tags.find(
    (t) => t.name.toLowerCase() === tag.toLowerCase()
  ) || { name: tag };
  const relevantPosts = posts
    .filter((p) =>
      p.module.meta.tags.map((t: string) => t.toLowerCase()).includes(tag)
    )
    .sort(
      (a, b) => b.module.meta.date.getTime() - a.module.meta.date.getTime()
    );
  return (
    <BasicLayout title={`#${tag}`}>
      <Container mt={12}>
        <Heading as="h1">{name.toUpperCase()}</Heading>
        {description && <Box>{description}</Box>}
        <UnorderedList>
          {relevantPosts.map((p) => {
            return (
              <ListItem key={p.link}>
                <SiteLink to={p.link}>{p.module.meta.title}</SiteLink>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Container>
    </BasicLayout>
  );
};

export default TagPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      tag: params?.tag,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(getAllTags()).map((t) => ({
      params: { tag: t.toLowerCase() },
    })),
    fallback: false,
  };
};
