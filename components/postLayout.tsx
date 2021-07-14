import { Container, Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { BasicLayout, BasicLayoutProps } from "./basicLayout";
import { SiteLink } from "./siteLink";

interface PostLayoutProps extends BasicLayoutProps {
  tags: string[];
}

export const PostLayout: React.FC<PostLayoutProps> = ({
  children,
  title,
  description,
  noNav,
  tags,
}) => {
  return (
    <BasicLayout title={title} description={description} noNav={noNav}>
      <Container maxW="container.md">
        <Heading as="h1" mt={12} mb={2}>
          {title}
        </Heading>
        <UnorderedList listStyleType="none" m={0}>
          {tags.map((tag, i) => {
            return (
              <>
                <ListItem
                  key={tag}
                  display="inline"
                  fontStyle="italic"
                  color="gray.500"
                  letterSpacing="wide"
                >
                  <SiteLink to={`/tags/${tag}`.toLowerCase()}>#{tag}</SiteLink>
                </ListItem>
                {i < tags.length - 1 && ", "}
              </>
            );
          })}
        </UnorderedList>
        {children}
      </Container>
    </BasicLayout>
  );
};
